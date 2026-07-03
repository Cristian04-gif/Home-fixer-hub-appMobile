import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
} from 'react-native';
import {
    Bell,
    Search,
    SlidersHorizontal,
    ChevronRight,
    ClipboardList,
    Zap,
    Droplet,
    Hammer,
    Brush,
    Lock,
    Leaf,
    Sparkles,
    ArrowRight
} from 'lucide-react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/RequestsCustomer.style';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';
import { getCustomerRequests } from '../../../services/CustomerService';
import { getUser } from '../../../storage/AuthStorage';
import { getTechnicalById } from '../../../services/TechnicalService';
import { formatDate } from '../../../hooks/formatDate';
export default function RequestsCustomer() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    const [solicitudes, setSolicitudes] = useState([]);
    const [tecnicos, setTecnicos] = useState([])
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [tabActiva, setTabActiva] = useState('todas');

    const fetchTech = async (techId) => {
        return await getTechnicalById(techId);
    }

    // 2. PETICIÓN HTTP (MÉTODO GET)
    const fetchSolicitudes = async (isRefreshing = false) => {
        if (isRefreshing) setRefreshing(true);
        else setLoading(true);

        try {
            // 🟢 Reemplaza esto con tu llamada real a la API:
            // const response = await fetch('https://tu-api.com/api/solicitudes');
            // const json = await response.json();
            // setSolicitudes(json);
            const customer = await getUser();
            if (customer && customer.id) {
                const customerId = customer.id;
                const res = await getCustomerRequests(customerId);
                setSolicitudes(res);

                const tecnicoPromises = res.map(request => fetchTech(request.technicalId));
                const techs = await Promise.all(tecnicoPromises);
                if (techs){
                    setTecnicos(techs)
                }
            }




        } catch (error) {
            console.error("Error al obtener las solicitudes de la API:", error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    // Disparador inicial al montar la pantalla
    useEffect(() => {
        fetchSolicitudes();
    }, []);

    // 3. LÓGICA DE FILTRADO EN FRONTEND
    const solicitudesFiltradas = solicitudes.filter(item => {
        if (tabActiva === 'todas') return true;
        return item.inquiryStatus === tabActiva;
    });

    // Conteo dinámico para las pestañas
    const totalTodas = solicitudes.length;
    const totalEnCurso = solicitudes.filter(i => i.inquiryStatus === 'EN_PROCESO').length;
    const totalCompletadas = solicitudes.filter(i => i.inquiryStatus === 'FINALIZADA').length;


    const categorias = [
        { nombre: 'Electricidad', color: '#EBF7EE', icono: <Zap size={responsive.font(22)} color="#34C759" /> },
        { nombre: 'Plomeria', color: '#E8F2FF', icono: <Droplet size={responsive.font(22)} color="#007AFF" /> },
        { nombre: 'Mecanica', color: '#FDF6ED', icono: <Hammer size={responsive.font(22)} color="#A27B5C" /> },
        { nombre: 'Pintura', color: '#E8F8F5', icono: <Brush size={responsive.font(22)} color="#1ABC9C" /> },
        { nombre: 'Cerrajeria', color: '#F2F2F7', icono: <Lock size={responsive.font(22)} color="#636E72" /> },
        { nombre: 'Jardineria', color: '#EAF9E7', icono: <Leaf size={responsive.font(22)} color="#4A7C59" /> },
        { nombre: 'Limpieza', color: '#E8F2FF', icono: <Sparkles size={responsive.font(22)} color="#007AFF" /> },
        { nombre: 'Ver más', color: '#F2F2F7', icono: <Text style={{ fontSize: 14, fontWeight: '600', color: '#3A3A3C' }}>+2</Text>, esBotonMas: true },
    ];
    // Asignación de iconos dinámicos de tu ecosistema
    const renderIcono = (categoria) => {
        switch (categoria) {
            case 'Electricidad': return <Zap size={responsive.font(20)} color="#D97706" />;
            case 'Plomería': return <Droplet size={responsive.font(20)} color="#007AFF" />;
            case 'Carpintería': return <Hammer size={responsive.font(20)} color="#A27B5C" />;
            case 'Jardineria': return <Leaf size={responsive.font(22)} color="#4A7C59" />;
            default: return <Zap size={responsive.font(20)} color="#8E8E93" />;
        }
    };

    const getBgIconColor = (categoria) => {
        if (categoria === 'Electricidad') return '#FDF6ED';
        if (categoria === 'Plomería') return '#E8F2FF';
        if (categoria === 'Jardineria') return "#EAF9E7";
        return '#EAF9E7'; // Carpintería / Otros
    };

    // 4. RENDERIZADO DE CADA TARJETA DE SOLICITUD
    const renderItem = ({ item }) => {
        const tech = tecnicos.find(t => t.id === item.technicalId);
        const fecha = formatDate(item.modificationDate);
        return (
            <View style={styles.card}>
                {/* Fila superior de la tarjeta */}
                <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                        <View style={[styles.iconCircle, { backgroundColor: getBgIconColor(item.serviceType) }]}>
                            {renderIcono(item.serviceType)}
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.categoriaText}>{item.serviceType}</Text>
                            <Text style={styles.tecnicoText}>Técnico: {tech.name} {tech.lastName}</Text>
                        </View>
                    </View>

                    {/* Badge de Estado Dinámico */}
                    <View style={[
                        styles.badge,
                        item.inquiryStatus === 'FINALIZADA' ? styles.badgeCompletada : styles.badgeEnCurso
                    ]}>
                        <Text style={[
                            styles.badgeText,
                            item.inquiryStatus === 'FINALIZADA' ? styles.badgeTextCompletada : styles.badgeTextEnCurso
                        ]}>
                            {item.estadoEtiqueta}
                        </Text>
                    </View>
                </View>

                {/* Datos del cuerpo */}
                <View style={styles.cardBody}>
                    <Text style={styles.bodyTextMain}>{item.detailedAddress}</Text>
                    <Text style={styles.bodyTextSub}>{fecha.fechaFormateada} a las {fecha.horaFormateada}</Text>
                    <Text style={styles.precioText}>S/. {item.totalAmount}.00</Text>
                </View>

                {/* Botón Ver Detalle */}
                <TouchableOpacity
                    style={styles.detailButton}
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate("RecuestDetail",{request: item, technical: tech, fecha: fecha})}
                >
                    <Text style={styles.detailButtonText}>Ver detalle</Text>
                    <ArrowRight size={responsive.font(16)} color={colors.primary} style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            </View>
        )
    };

    return (
        <View style={styles.container}>

            {/* TABS DE FILTRADO (ESTILO MOCKUP) */}
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={[styles.tab, tabActiva === 'todas' && styles.tabActiva]}
                    onPress={() => setTabActiva('todas')}
                >
                    <Text style={[styles.tabText, tabActiva === 'todas' && styles.tabTextActivo]}>
                        Todas ({totalTodas})
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabActiva === 'EN_PROCESO' && styles.tabActiva]}
                    onPress={() => setTabActiva('EN_PROCESO')}
                >
                    <Text style={[styles.tabText, tabActiva === 'EN_PROCESO' && styles.tabTextActivo]}>
                        En curso ({totalEnCurso})
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabActiva === 'FINALIZADA' && styles.tabActiva]}
                    onPress={() => setTabActiva('FINALIZADA')}
                >
                    <Text style={[styles.tabText, tabActiva === 'FINALIZADA' && styles.tabTextActivo]}>
                        Completadas ({totalCompletadas})
                    </Text>
                </TouchableOpacity>
            </View>

            {/* MANEJO DE CARGA / LISTA PRINCIPAL */}
            {
                loading ? (
                    <View style={styles.centerContainer}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                ) : (
                    <FlatList
                        data={solicitudesFiltradas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContent}
                        // Funcionalidad Pull-to-Refresh HTTP
                        onRefresh={() => fetchSolicitudes(true)}
                        refreshing={refreshing}
                        ListEmptyComponent={
                            <View style={styles.centerContainer}>
                                <Text style={styles.emptyText}>No tienes solicitudes en esta categoría.</Text>
                            </View>
                        }
                    />
                )
            }
        </View >
    );
}
