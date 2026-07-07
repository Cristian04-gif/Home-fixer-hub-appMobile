import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { ChevronRight, Search, Zap, Droplet, Hammer, Brush, Lock, Leaf } from 'lucide-react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/ServiceCatalog.style';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';
import { useSymbols } from '../../../hooks/useSymbols';
export default function ServiceCatalog({ route }) {
    const { services } = route.params;
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    const [busqueda, setBusqueda] = useState('');

   

    // 2. FILTRADO EN TIEMPO REAL
    const serviciosFiltrados = services.filter((servicio) =>
        servicio.name.toLowerCase().includes(busqueda.toLowerCase())
    );

    // 3. RENDERIZADO DE CADA TARJETA
    const renderItem = ({ item }) => {
        const {value} = useSymbols(item.name, responsive);
        return (
            <TouchableOpacity style={styles.card} activeOpacity={responsive.scale * 0.7} onPress={() => navigation.navigate('TechniciansAvailable', {serviceId: item.id, cantidad: item.techNum, serviceName: item.name})}>
                <View style={[styles.iconCircle, { backgroundColor: value.color }]}>
                    {value.icono}
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.serviceName}>{item.name}</Text>
                    <Text style={styles.serviceDescription}>{item.description}</Text>
                    <Text style={styles.tecnicosText}>{item.techNum} tecnico(s)</Text>
                </View>

                <ChevronRight size={responsive.font(20)} color={colors.placeholder} style={styles.arrowIcon} />
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* BARRA DE BÚSQUEDA */}
            <View style={styles.searchSection}>
                <View style={styles.searchContainer}>
                    <Search size={responsive.font(20)} color={colors.placeholder} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar servicio..."
                        placeholderTextColor={colors.placeholder}
                        value={busqueda}
                        onChangeText={setBusqueda}
                    />
                </View>
            </View>

            {/* LISTA OPTIMIZADA CON FLATLIST */}
            <FlatList
                data={serviciosFiltrados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No se encontraron servicios disponibles</Text>
                }
            />
        </View>
    );
}

