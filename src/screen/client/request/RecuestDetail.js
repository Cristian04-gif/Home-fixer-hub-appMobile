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
    ArrowRight,
    ChevronLeft,
    MapPin
} from 'lucide-react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/RecuestDetail.style';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';
import { cancelQuery } from '../../../services/CustomerService';
export default function RecuestDetail({ route }) {
    const { request, technical, fecha, simbolo } = route.params;
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();


    // ESTADOS PARA LA CONSULTA HTTP
    const [loading, setLoading] = useState(true);
    const [cancelando, setCancelando] = useState(false);

    const renderIcono = (categoria) => {
        switch (categoria) {
            case 'Electricidad': return <Zap size={responsive.font(20)} color="#D97706" />;
            case 'Plomería': return <Droplet size={responsive.font(20)} color="#007AFF" />;
            case 'Carpintería': return <Hammer size={responsive.font(20)} color="#A27B5C" />;
            case 'Jardineria': return <Leaf size={responsive.font(22)} color="#4A7C59" />;
            default: return <Zap size={responsive.font(20)} color="#8E8E93" />;
        }
    };


    // 2. PETICIÓN HTTP: CANCELAR SOLICITUD (POST / PATCH / DELETE)
    const handleCancelarSolicitud = async () => {
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
                            const res = await cancelQuery(request.id);
                            if (res) {
                                await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulando red
                                Alert.alert('Éxito', 'La solicitud ha sido cancelada correctamente.');
                                navigation.navigate("RequestsCustomer")
                            }

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



    return (
        <SafeAreaView style={styles.container}>

            {/* CONTENIDO FLUIDO */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* ENCABEZADO DE CATEGORÍA Y STATUS */}
                <View style={styles.topStatusRow}>
                    <View style={styles.categoryLeft}>
                        <View style={[styles.iconContainer, { backgroundColor: simbolo.color }]}>
                            {simbolo.icono}
                        </View>
                        <View style={styles.categoryTexts}>
                            <Text style={styles.textCategory}>{request.serviceType}</Text>
                        </View>
                    </View>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusBadgeText}>{request.inquiryStatus}</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* TÉCNICO ASIGNADO */}
                <Text style={styles.sectionTitle}>Técnico asignado</Text>
                <View style={styles.tecnicoCard}>
                    <Image source={{ uri: technical.urlPhotoProfile }} style={styles.avatar} />
                    <View style={styles.tecnicoInfo}>
                        <Text style={styles.tecnicoName}>{technical.name} {technical.lastName}</Text>
                        <Text style={styles.tecnicoRating}>
                            ★ {technical.rating} <Text style={styles.reviewsText}>({technical.reviews})</Text>
                        </Text>
                    </View>
                </View>

                {/* DIRECCIÓN */}
                <Text style={styles.sectionTitle}>Dirección</Text>
                <View style={styles.metaRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.mainMetaText}>{request.detailedAddress}</Text>
                    </View>
                    <MapPin size={responsive.font(20)} color={colors.textSecondary} />
                </View>

                {/* DESCRIPCIÓN */}
                <Text style={styles.sectionTitle}>Descripción</Text>
                <Text style={styles.descriptionText}>{request.description}</Text>

                {/* INFORMACIÓN DEL SERVICIO */}
                <Text style={styles.sectionTitle}>Información del servicio</Text>
                <View style={styles.infoBox}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Fecha</Text>
                        <Text style={styles.infoValue}>{fecha.fechaFormateada} a las {fecha.horaFormateada}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Precio acordado</Text>
                        <Text style={styles.infoValuePrice}>S/.{request.totalAmount}.00</Text>
                    </View>

                </View>

            </ScrollView>

            {request.inquiryStatus === "FINALIZADA" ?
                <>
                    <View style={styles.bottomContainer}>
                        <View style={styles.boxFinaly}>
                            <Text style={styles.txtFinaly}>Solicitud de {request.title} completada</Text>
                        </View>

                    </View>
                </>
                :
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
            }



        </SafeAreaView>
    );
}
