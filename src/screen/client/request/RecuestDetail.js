import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    StatusBar,
} from 'react-native';
import { ChevronLeft, MapPin, Droplet } from 'lucide-react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/RecuestDetail.style';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';
export default function RecuestDetail() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    // En producción, obtienes el ID enviado desde la lista: const { solicitudId } = route.params;
    const solicitudId = 'SR-000123';

    // ESTADOS PARA LA CONSULTA HTTP
    const [detalles, setDetalles] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cancelando, setCancelando] = useState(false);

    // 1. PETICIÓN HTTP: OBTENER DETALLE (GET)
    const fetchDetalleSolicitud = async () => {
        setLoading(true);
        try {
            // 🟢 Reemplaza con tu endpoint real:
            // const response = await fetch(`https://tu-api.com/api/solicitudes/${solicitudId}`);
            // const json = await response.json();
            // setDetalles(json);

            // --- SIMULACIÓN DE RESPUESTA DEL SERVIDOR ---
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const datosMock = {
                id: 'SR-000123',
                categoria: 'Plomería',
                estado: 'En curso',
                tecnico: {
                    nombre: 'Carlos Rodríguez',
                    rating: '4.8',
                    reseñas: '32 reseñas',
                    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                },
                direccion: 'Av. Siempre Viva 123',
                distanciaContexto: 'A 1.2 km de ti',
                descripcion: 'Hay una fuga de agua debajo del lavamanos del baño. Necesito revisión y reparación.',
                fotos: [
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80',
                    'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=200&q=80',
                    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=200&q=80',
                ],
                informacionServicio: {
                    fecha: 'Hoy, 10:30 a. m.',
                    precioAcordado: '$45.00',
                    metodoPago: 'Efectivo',
                },
            };
            setDetalles(datosMock);
            // --------------------------------------------
        } catch (error) {
            console.error('Error al consultar el detalle:', error);
            Alert.alert('Error', 'No se pudo obtener la información de la solicitud.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDetalleSolicitud();
    }, [solicitudId]);

    // 2. PETICIÓN HTTP: CANCELAR SOLICITUD (POST / PATCH / DELETE)
    const handleCancelarSolicitud = () => {
        Alert.alert(
            'Cancelar solicitud',
            '¿Estás seguro de que deseas cancelar esta solicitud de servicio?',
            [
                { text: 'No, mantener', style: 'cancel' },
                {
                    text: 'Sí, cancelar',
                    style: 'destructive',
                    onPress: async () => {
                        setCancelando(true);
                        try {
                            // 🟢 Reemplaza con tu llamada de mutación real:
                            // const response = await fetch(`https://tu-api.com/api/solicitudes/${solicitudId}/cancelar`, { method: 'POST' });
                            // if (response.ok) { ... }

                            await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulando red
                            Alert.alert('Éxito', 'La solicitud ha sido cancelada correctamente.');
                            // Aquí agregarías la navegación hacia atrás: navigation.goBack();
                        } catch (error) {
                            Alert.alert('Error', 'Ocurrió un problema al procesar la cancelación.');
                        } finally {
                            setCancelando(false);
                        }
                    },
                },
            ]
        );
    };

    // Render de carga inicial
    if (loading) {
        return (
            <SafeAreaView style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={colors.primary} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>

            {/* CONTENIDO FLUIDO */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* ENCABEZADO DE CATEGORÍA Y STATUS */}
                <View style={styles.topStatusRow}>
                    <View style={styles.categoryLeft}>
                        <View style={styles.iconContainer}>
                            <Droplet size={responsive.font(22)} color={colors.primary} />
                        </View>
                        <View style={styles.categoryTexts}>
                            <Text style={styles.textCategory}>{detalles.categoria}</Text>
                            <Text style={styles.textSubId}>Solicitud #{detalles.id}</Text>
                        </View>
                    </View>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusBadgeText}>{detalles.estado}</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* TÉCNICO ASIGNADO */}
                <Text style={styles.sectionTitle}>Técnico asignado</Text>
                <View style={styles.tecnicoCard}>
                    <Image source={{ uri: detalles.tecnico.avatar }} style={styles.avatar} />
                    <View style={styles.tecnicoInfo}>
                        <Text style={styles.tecnicoName}>{detalles.tecnico.nombre}</Text>
                        <Text style={styles.tecnicoRating}>
                            ★ {detalles.tecnico.rating} <Text style={styles.reviewsText}>({detalles.tecnico.reseñas})</Text>
                        </Text>
                    </View>
                </View>

                {/* DIRECCIÓN */}
                <Text style={styles.sectionTitle}>Dirección</Text>
                <View style={styles.metaRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.mainMetaText}>{detalles.direccion}</Text>
                    </View>
                    <MapPin size={responsive.font(20)} color={colors.textSecondary} />
                </View>

                {/* DESCRIPCIÓN */}
                <Text style={styles.sectionTitle}>Descripción</Text>
                <Text style={styles.descriptionText}>{detalles.descripcion}</Text>

                {/* INFORMACIÓN DEL SERVICIO */}
                <Text style={styles.sectionTitle}>Información del servicio</Text>
                <View style={styles.infoBox}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Fecha</Text>
                        <Text style={styles.infoValue}>{detalles.informacionServicio.fecha}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Precio acordado</Text>
                        <Text style={styles.infoValuePrice}>{detalles.informacionServicio.precioAcordado}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Método de pago</Text>
                        <Text style={styles.infoValue}>{detalles.informacionServicio.metodoPago}</Text>
                    </View>
                </View>

            </ScrollView>

            {/* BOTÓN DE CANCELACIÓN INFERIOR */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={handleCancelarSolicitud}
                    disabled={cancelando}
                    activeOpacity={0.8}
                >
                    {cancelando ? (
                        <ActivityIndicator size="small" color={colors.disable} />
                    ) : (
                        <Text style={styles.btnCancelText}>Cancelar solicitud</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
