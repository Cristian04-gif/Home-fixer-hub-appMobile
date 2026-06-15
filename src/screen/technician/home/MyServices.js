import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TouchableOpacity, StatusBar
} from 'react-native';
import { Zap, Droplet, Hammer, Brush, Tv, Plus } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/MyServices.style';
import colors from '../../../utils/colors';

export default function MyServices({ route }) {
  const { services } = route.params;
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  const [servicios, setServicios] = useState(services || null);

  // 2. FUNCIÓN PARA ENCONTRAR Y CAMBIAR EL SWITCH DEL SERVICIO CORRECTO
  const toggleService = (id) => {
    setServicios((prevServicios) =>
      prevServicios.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* CUERPO CON SCROLL */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {servicios.map((servicio) => (
          <View key={servicio.id} style={styles.card}>
            {/* Fila superior: Icono, Info y Precio */}
            <View style={styles.cardHeader}>
              <View style={[styles.iconCircle, { backgroundColor: servicio.color }]}>
                <Text>{servicio.iconService}</Text>
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.serviceName}>{servicio.nameService}</Text>
                <Text style={styles.serviceDescription}>{servicio.description}</Text>
              </View>

              <Text style={styles.priceText}>S/. {servicio.basePrice}</Text>
            </View>

            {/* Fila inferior: Switch de Activo */}
            <View style={styles.cardFooter}>
              <Text style={[styles.activoText, { color: servicio.available ? colors.enable : colors.disable }]}>
                {servicio.available ? 'Activo' : 'Inactivo'}
              </Text>
              <Switch
                trackColor={{ false: colors.textSecondary, true: colors.enable }}
                thumbColor={colors.white}
                ios_backgroundColor="#E9E9EA"
                onValueChange={() => toggleService(servicio.id)}
                value={servicio.available}
                style={styles.switchScale}
              />
            </View>
          </View>
        ))}

      </ScrollView>

      {/* BOTÓN FIJO INFERIOR: AGREGAR SERVICIO */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.8} onPress={() => navigation.navigate('NewService')}>
          <Plus size={responsive.font(20)} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.addButtonText}>Agregar servicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
