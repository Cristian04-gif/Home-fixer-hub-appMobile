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
export default function MyServices() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  const [servicios, setServicios] = useState([
    {
      id: '1',
      nombre: 'Electricidad',
      descripcion: 'Instalaciones, reparaciones y mantenimiento eléctrico',
      precio: '35.00',
      color: '#FDF6ED', // Fondo beige/naranja suave
      icono: <Zap size={responsive.font(22)} color="#D97706" />,
      activo: true,
    },
    {
      id: '2',
      nombre: 'Plomería',
      descripcion: 'Instalación y reparación de tuberías y fugas',
      precio: '40.00',
      color: '#E8F2FF', // Fondo azul claro
      icono: <Droplet size={responsive.font(22)} color="#007AFF" />,
      activo: true,
    },
    {
      id: '3',
      nombre: 'Carpintería',
      descripcion: 'Muebles, puertas, armarios a medida',
      precio: '45.00',
      color: '#FDF6ED',
      icono: <Hammer size={responsive.font(22)} color="#A27B5C" />,
      activo: true,
    },
    {
      id: '4',
      nombre: 'Pintura',
      descripcion: 'Pintura de interiores y exteriores',
      precio: '30.00',
      color: '#E8F8F5', // Fondo verde menta suave
      icono: <Brush size={responsive.font(22)} color="#1ABC9C" />,
      activo: true,
    },
    {
      id: '5',
      nombre: 'Instalación de TV',
      descripcion: 'Montaje e instalación de televisores',
      precio: '25.00',
      color: '#F2F2F7', // Fondo gris claro
      icono: <Tv size={responsive.font(22)} color="#636E72" />,
      activo: true,
    },
  ]);

  // 2. FUNCIÓN PARA ENCONTRAR Y CAMBIAR EL SWITCH DEL SERVICIO CORRECTO
  const toggleService = (id) => {
    setServicios((prevServicios) =>
      prevServicios.map((item) =>
        item.id === id ? { ...item, activo: !item.activo } : item
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
                {servicio.icono}
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.serviceName}>{servicio.nombre}</Text>
                <Text style={styles.serviceDescription}>{servicio.descripcion}</Text>
              </View>

              <Text style={styles.priceText}>S/. {servicio.precio}</Text>
            </View>

            {/* Fila inferior: Switch de Activo */}
            <View style={styles.cardFooter}>
              <Text style={[styles.activoText, { color: servicio.activo ? colors.enable : colors.disable }]}>
                {servicio.activo ? 'Activo' : 'Inactivo'}
              </Text>
              <Switch
                trackColor={{ false: colors.textSecondary, true: colors.enable }}
                thumbColor={colors.white}
                ios_backgroundColor="#E9E9EA"
                onValueChange={() => toggleService(servicio.id)}
                value={servicio.activo}
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
