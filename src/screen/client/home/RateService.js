import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { ChevronLeft, Star } from 'lucide-react-native';

import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/RateService.style';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';
import { registerReview } from '../../../services/NotificationService';
export default function RateService({ route }) {
    const { bookingId, technicalId } = route.params;
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();

    const [calificacion, setCalificacion] = useState(0);
    const [comentario, setComentario] = useState('');
    const [enviando, setEnviando] = useState(false);

    const maxCaracteres = 300;

    const handleEnviarCalificacion = async () => {
        if (calificacion === 0) {
            Alert.alert('Calificación requerida', 'Por favor, selecciona una puntuación usando las estrellas.');
            return;
        }

        setEnviando(true);
        try {

            const requestReview = {
                comment: comentario,
                punctuation: calificacion,
                bookingId: bookingId,
                technicalId: technicalId
            }

            const res = await registerReview(requestReview);
            if (res) {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                Alert.alert('¡Muchas gracias!', 'Tu calificación ha sido enviada con éxito.', [
                    { text: 'OK', onPress: () => navigation.goBack()}
                ]);
            }
            
        } catch (error) {
            Alert.alert('Error', 'No se pudo enviar la calificación. Inténtalo de nuevo.');
        } finally {
            setEnviando(false);
        }
    };

    const renderEstrellas = () => {
        const estrellas = [];
        for (let i = 1; i <= 5; i++) {
            estrellas.push(
                <TouchableOpacity
                    key={i}
                    activeOpacity={0.7}
                    onPress={() => setCalificacion(i)}
                    style={styles.starButton}
                >
                    <Star
                        size={responsive.font(36)}
                        color={i <= calificacion ? colors.star : '#D1D1D6'}
                        fill={i <= calificacion ? colors.star : 'transparent'}
                    />
                </TouchableOpacity>
            );
        }
        return estrellas;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* NAVBAR */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
                    <ChevronLeft size={responsive.font(24)} color={colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.navTitle}>Califica el servicio</Text>
                <View style={{ width: responsive.scale * 24 }} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {/* CONTENEDOR DE ÉXITO SUPERIOR */}
                    <View style={styles.successCard}>
                        <View style={styles.successCircleOuter}>
                            <View style={styles.successCircleInner}>
                                <Text style={styles.checkmark}>✓</Text>
                            </View>
                        </View>
                        <Text style={styles.successTitle}>¡Servicio completado!</Text>
                        <Text style={styles.successSubtitle}>Tu opinión es muy importante</Text>
                    </View>

                    {/* SECCIÓN INTERACTIVA DE CALIFICACIÓN */}
                    <Text style={styles.sectionLabel}>Califica tu experiencia</Text>
                    <View style={styles.ratingRowContainer}>
                        <View style={styles.starsRow}>
                            {renderEstrellas()}
                        </View>
                        <View style={styles.ratingNumberBadge}>
                            <Text style={styles.ratingNumberText}>
                                {calificacion > 0 ? calificacion.toFixed(1) : '0.0'}
                            </Text>
                        </View>
                    </View>

                    {/* CAJA DE TEXTO PARA EL COMENTARIO */}
                    <Text style={styles.sectionLabel}>Comentario (opcional)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textArea}
                            placeholder="Cuéntanos cómo fue tu experiencia..."
                            placeholderTextColor={colors.placeholder}
                            multiline={true}
                            numberOfLines={4}
                            maxLength={maxCaracteres}
                            value={comentario}
                            onChangeText={setComentario}
                            textAlignVertical="top"
                        />
                        <Text style={styles.charCounter}>
                            {comentario.length}/{maxCaracteres}
                        </Text>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>

            {/* BOTÓN FIJO INFERIOR */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={[
                        styles.submitButton,
                        enviando && { opacity: responsive.scale * 0.8 }
                    ]}
                    onPress={handleEnviarCalificacion}
                    disabled={enviando}
                    activeOpacity={0.8}
                >
                    {enviando ? (
                        <ActivityIndicator size="small" color={colors.white} />
                    ) : (
                        <Text style={styles.submitButtonText}>Enviar calificación</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


