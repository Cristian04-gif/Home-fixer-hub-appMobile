import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { ChevronRight, MapPin, Star } from 'lucide-react-native';
import colors from '../../../utils/colors';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/TechniciansAvailable.style';
import { useNavigation } from "@react-navigation/native";
import { getTechnicalsByService } from '../../../services/CatalogService';
export default function TechniciansAvailable({ route }) {
    const { serviceId, cantidad, serviceName } = route.params;
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    // Estado para controlar qué chip de ordenamiento está activo
    const [filtroActivo, setFiltroActivo] = useState('valorados');
    const [technicals, setTechnicals] = useState([])


    const handleTechnicals = async () => {
        const techs = await getTechnicalsByService(serviceId);
        
        setTechnicals(techs);
    }

    useEffect(() => {
        handleTechnicals();
    }, [])

    // 2. COMPONENTE PARA RENDERIZAR CADA TARJETA DE TÉCNICO
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} activeOpacity={responsive.scale * 0.8} onPress={() => navigation.navigate('TechnicianDetails', { technical: item, service: serviceName })}>
            <View style={styles.cardContent}>
                {/* Foto de Perfil */}
                <Image source={{ uri: item.urlPhotoProfile }} style={styles.avatar} />

                {/* Bloque central de información */}
                <View style={styles.infoContainer}>
                    <Text style={styles.nombreText}>{item.name} {item.lastName}</Text>

                    {/* Calificación y reseñas */}
                    <View style={styles.metaRow}>
                        <Star size={responsive.font(14)} color={colors.star} fill={colors.star} />
                        <Text style={styles.ratingText}>{item.averageRating}</Text>
                        <Text style={styles.reseñasText}>({item.reseñas})</Text>
                    </View>

                    {/* Precio Base */}
                    <Text style={styles.precioText}>
                        Desde <Text style={styles.montoText}>S/. {item.price}.00</Text>
                    </Text>
                </View>

                {/* Flecha de navegación lateral */}
                <ChevronRight size={responsive.font(20)} color={colors.textSecondary} style={styles.arrowIcon} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>

            {/* ENCABEZADO DE LA LISTA (Filtros y Contador) */}
            <View style={styles.headerContainer}>
                <Text style={styles.contadorText}>{cantidad} técnicos disponible(s)</Text>

                {/* Fila Horizontal de Filtros en forma de Chips */}
                <View style={styles.chipsRow}>
                    <TouchableOpacity
                        style={[styles.chip, filtroActivo === 'valorados' && styles.chipActivo]}
                        onPress={() => setFiltroActivo('valorados')}
                    >
                        <Text style={[styles.chipText, filtroActivo === 'valorados' && styles.chipTextActivo]}>
                            Mejor valorados
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.chip, filtroActivo === 'precio' && styles.chipActivo]}
                        onPress={() => setFiltroActivo('precio')}
                    >
                        <Text style={[styles.chipText, filtroActivo === 'precio' && styles.chipTextActivo]}>
                            Precio
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* LISTADO PRINCIPAL */}
            <FlatList
                data={technicals}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
}

