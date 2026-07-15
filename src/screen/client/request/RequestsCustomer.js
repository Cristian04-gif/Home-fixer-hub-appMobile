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
import { useSymbols } from '../../../hooks/useSymbols';
export default function RequestsCustomer() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    const [solicitudes, setSolicitudes] = useState([]);
    const [tecnicos, setTecnicos] = useState([])
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [tabActiva, setTabActiva] = useState('EN_PROCESO');

    const fetchTech = async (techId) => {
        return await getTechnicalById(techId);
    }

    // 2. PETICIÓN HTTP (MÉTODO GET)
    const fetchSolicitudes = async (isRefreshing = false) => {
        if (isRefreshing) setRefreshing(true);
        else setLoading(true);

        try {
            
            const customer = await getUser();
            if (customer && customer.id) {
                const customerId = customer.id;
                const res = await getCustomerRequests(customerId);
                setSolicitudes(res);

                const tecnicoPromises = res.map(request => fetchTech(request.technicalId));
                const techs = await Promise.all(tecnicoPromises);
                if (techs) {
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
   

    // 4. RENDERIZADO DE CADA TARJETA DE SOLICITUD
    const renderItem = ({ item }) => {
        const tech = tecnicos.find(t => t.id === item.technicalId);
        const fecha = formatDate(item.modificationDate);
        const { value } = useSymbols(item.serviceType, responsive);

        return (
            <View style={styles.card}>
                {/* Fila superior de la tarjeta */}
                <View style={styles.cardHeader}>
                    <View style={styles.headerLeft}>
                        <View style={[styles.iconCircle, { backgroundColor: value.color }]}>
                            {value.icono}
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
                    onPress={() => navigation.navigate("RecuestDetail", { request: item, technical: tech, fecha: fecha, simbolo: value })}
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
                    style={[styles.tab, tabActiva === 'EN_PROCESO' && styles.tabActiva]}
                    onPress={() => setTabActiva('EN_PROCESO')}
                >
                    <Text style={[styles.tabText, tabActiva === 'EN_PROCESO' && styles.tabTextActivo]}>
                        En curso ({totalEnCurso})
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabActiva === 'todas' && styles.tabActiva]}
                    onPress={() => setTabActiva('todas')}
                >
                    <Text style={[styles.tabText, tabActiva === 'todas' && styles.tabTextActivo]}>
                        Todas ({totalTodas})
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
