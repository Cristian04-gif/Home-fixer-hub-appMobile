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
import { ArrowRight, Zap, Droplet, Hammer } from 'lucide-react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/RequestsCustomer.style';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';
export default function RequestsCustomer() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    // 1. ESTADOS PARA PETICIONES HTTP
    const [solicitudes, setSolicitudes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Estado para la pestaña/filtro activo ('todas', 'en_curso', 'completadas')
    const [tabActiva, setTabActiva] = useState('todas');

    // 2. PETICIÓN HTTP (MÉTODO GET)
    const fetchSolicitudes = async (isRefreshing = false) => {
        if (isRefreshing) setRefreshing(true);
        else setLoading(true);

        try {
            // 🟢 Reemplaza esto con tu llamada real a la API:
            // const response = await fetch('https://tu-api.com/api/solicitudes');
            // const json = await response.json();
            // setSolicitudes(json);

            // --- SIMULACIÓN DE RESPUESTA DE SERVIDOR (DATOS DEL MOCKUP) ---
            await new Promise(resolve => setTimeout(resolve, 1200)); // Simula retraso de red
            const datosSimulados = [
                {
                    id: '1',
                    categoria: 'Plomería',
                    tecnico: 'Carlos Rodríguez',
                    direccion: 'Av. Siempre Viva 123',
                    fecha: 'Hoy, 10:30 a. m.',
                    precio: '$45.00',
                    estado: 'en_curso', // Match con filtro
                    estadoEtiqueta: 'En curso',
                },
                {
                    id: '2',
                    categoria: 'Electricidad',
                    tecnico: 'Luis Martinez',
                    direccion: 'Calle Los Pinos 45',
                    fecha: 'Hoy, 2:00 p. m.',
                    precio: '$35.00',
                    estado: 'en_curso',
                    estadoEtiqueta: 'En curso',
                },
                {
                    id: '3',
                    categoria: 'Carpintería',
                    tecnico: 'Andrés Gómez',
                    direccion: 'Calle Luna 78',
                    fecha: 'Ayer, 9:00 a. m.',
                    precio: '$40.00',
                    estado: 'completada',
                    estadoEtiqueta: 'Completada',
                },
            ];
            setSolicitudes(datosSimulados);
            // -------------------------------------------------------------

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
        return item.estado === tabActiva;
    });

    // Conteo dinámico para las pestañas
    const totalTodas = solicitudes.length;
    const totalEnCurso = solicitudes.filter(i => i.estado === 'en_curso').length;
    const totalCompletadas = solicitudes.filter(i => i.estado === 'completada').length;

    // Asignación de iconos dinámicos de tu ecosistema
    const renderIcono = (categoria) => {
        switch (categoria) {
            case 'Electricidad': return <Zap size={responsive.font(20)} color="#D97706" />;
            case 'Plomería': return <Droplet size={responsive.font(20)} color="#007AFF" />;
            case 'Carpintería': return <Hammer size={responsive.font(20)} color="#A27B5C" />;
            default: return <Zap size={responsive.font(20)} color="#8E8E93" />;
        }
    };

    const getBgIconColor = (categoria) => {
        if (categoria === 'Electricidad') return '#FDF6ED';
        if (categoria === 'Plomería') return '#E8F2FF';
        return '#EAF9E7'; // Carpintería / Otros
    };

    // 4. RENDERIZADO DE CADA TARJETA DE SOLICITUD
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            {/* Fila superior de la tarjeta */}
            <View style={styles.cardHeader}>
                <View style={styles.headerLeft}>
                    <View style={[styles.iconCircle, { backgroundColor: getBgIconColor(item.categoria) }]}>
                        {renderIcono(item.categoria)}
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.categoriaText}>{item.categoria}</Text>
                        <Text style={styles.tecnicoText}>Técnico: {item.tecnico}</Text>
                    </View>
                </View>

                {/* Badge de Estado Dinámico */}
                <View style={[
                    styles.badge,
                    item.estado === 'completada' ? styles.badgeCompletada : styles.badgeEnCurso
                ]}>
                    <Text style={[
                        styles.badgeText,
                        item.estado === 'completada' ? styles.badgeTextCompletada : styles.badgeTextEnCurso
                    ]}>
                        {item.estadoEtiqueta}
                    </Text>
                </View>
            </View>

            {/* Datos del cuerpo */}
            <View style={styles.cardBody}>
                <Text style={styles.bodyTextMain}>{item.direccion}</Text>
                <Text style={styles.bodyTextSub}>{item.fecha}</Text>
                <Text style={styles.precioText}>{item.precio}</Text>
            </View>

            {/* Botón Ver Detalle */}
            <TouchableOpacity
                style={styles.detailButton}
                activeOpacity={0.6}
                onPress={() => navigation.navigate("RecuestDetail")}
            >
                <Text style={styles.detailButtonText}>Ver detalle</Text>
                <ArrowRight size={responsive.font(16)} color={colors.primary} style={{ marginLeft: 4 }} />
            </TouchableOpacity>
        </View>
    );

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
                    style={[styles.tab, tabActiva === 'en_curso' && styles.tabActiva]}
                    onPress={() => setTabActiva('en_curso')}
                >
                    <Text style={[styles.tabText, tabActiva === 'en_curso' && styles.tabTextActivo]}>
                        En curso ({totalEnCurso})
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabActiva === 'completadas' && styles.tabActiva]}
                    onPress={() => setTabActiva('completada')}
                >
                    <Text style={[styles.tabText, tabActiva === 'completadas' && styles.tabTextActivo]}>
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
