import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { ChevronLeft, Star, MapPin, Award, CheckCircle2 } from 'lucide-react-native';
import colors from '../../../utils/colors';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/TechnicianDetails.style';
import { useNavigation } from "@react-navigation/native";
export default function TechnicianDetails({ route }) {
    const { technical, service } = route.params;
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    // Estado simulado por si se desea implementar un botón de "Favorito" en la estrella flotante
    const [esFavorito, setEsFavorito] = useState(false);


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* CUERPO CON SCROLL PARA LA INFORMACIÓN */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* HEADER AZUL SUPERIOR CON BOTÓN VOLVER */}
                <View style={styles.topHeader}>
                    <Image source={require('../../../assets/onda-superior.png')} style={styles.topWave}></Image>
                    <TouchableOpacity style={styles.backButton} activeOpacity={responsive.scale * responsive.scale * 0.7} onPress={() => navigation.goBack()}>
                        <ChevronLeft size={26} color={colors.white} />
                    </TouchableOpacity>
                </View>

                {/* CONTENEDOR DE PERFIL (FOTO Y TITULARES) */}
                <View style={styles.profileCard}>
                    {/* Avatar con Insignia de Favorito Estilo Mockup */}
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: technical.urlPhotoProfile }} style={styles.avatar} />
                        <TouchableOpacity
                            style={styles.favoriteButton}
                            onPress={() => setEsFavorito(!esFavorito)}
                            activeOpacity={responsive.scale * responsive.scale * 0.9}
                        >
                            <Star size={responsive.font(16)} color={esFavorito ? colors.star : colors.primary} fill={esFavorito ? colors.star : 'none'} />
                        </TouchableOpacity>
                    </View>

                    {/* Textos Principales */}
                    <Text style={styles.nameText}>{technical.name} {technical.lastName}</Text>
                    <Text style={styles.specialtyText}>Tecnico en {service}</Text>

                    {/* Fila de Calificación */}
                    <View style={styles.ratingRow}>
                        <Star size={responsive.font(16)} color={colors.star} fill={colors.star} />
                        <Text style={styles.ratingText}> {technical.averageRating} </Text>
                        <Text style={styles.reviewsText}>({technical.reseñas})</Text>
                    </View>
                </View>

                {/* METADATOS (Ubicación, Experiencia y Estado) */}
                <View style={styles.metaSection}>

                    {/* Badge de Disponibilidad */}
                    <View style={styles.badgeContainer}>
                        <View style={styles.badge}>
                            <CheckCircle2 size={14} color={colors.enable} fill={colors.cardBg} />
                            <Text style={styles.badgeText}>{technical.available ? "Disponible" : "No disponible"}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* LISTA DE SERVICIOS QUE OFRECE */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Servicios que ofrece</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>Ver todos</Text>
                        </TouchableOpacity>
                    </View>

                    {technical.servicesOffered.map((servicio) => (
                        <View key={servicio.id} style={styles.serviceCheckRow}>
                            <CheckCircle2 size={responsive.font(20)} color={colors.enable} fill={colors.cardBg} />
                            <Text style={styles.serviceCheckText}>{servicio.name} - S/. {servicio.basePrice}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.divider} />

                {/* SECCIÓN SOBRE MÍ */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Sobre mí</Text>
                    <Text style={styles.aboutText}>{technical.description}</Text>


                </View>

                <View style={styles.divider} />

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Fotos de mi trabajo</Text>
                    {technical.urlImages.map(img => (
                        <Image key={img} source={{ uri: img }} style={styles.imgs}></Image>
                    ))}


                </View>

            </ScrollView>

            {/* BARRA FIJA INFERIOR DE ACCIONES */}
            <View style={styles.fixedBottomBar}>
                <TouchableOpacity style={styles.btnMensaje} activeOpacity={responsive.scale * 0.7}>
                    <Text style={styles.textMensaje}>Mensaje</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSolicitar} activeOpacity={responsive.scale * 0.8} onPress={() => navigation.navigate('RequestService', {tech: technical, serv: service})}>
                    <Text style={styles.textSolicitar}>Solicitar servicio</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

