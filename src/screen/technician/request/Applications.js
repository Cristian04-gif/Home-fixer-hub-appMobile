import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar, FlatList
} from 'react-native';
import { Zap, Droplet, Hammer } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/Applications.style';
export default function Applications() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  const [solicitudes, setSolicitudes] = useState([
    {
      id: '1',
      categoria: 'Electricidad',
      titulo: 'Instalación de lámpara',
      direccion: 'Av. Siempre Viva 123',
      distancia: 'A 1.2 km de ti',
      precio: '35.00',
      hora: '10:30 a. m.',
      colorBg: '#FDF6ED',
      icono: <Zap size={responsive.font(22)} color="#D97706" />,
    },
    {
      id: '2',
      categoria: 'Plomería',
      titulo: 'Fuga de agua en cocina',
      direccion: 'Calle Los Pinos 45',
      distancia: 'A 2.5 km de ti',
      precio: '45.00',
      hora: '11:15 a. m.',
      colorBg: '#E8F2FF',
      icono: <Droplet size={responsive.font(22)} color="#007AFF" />,
    },
    {
      id: '3',
      categoria: 'Carpintería',
      titulo: 'Reparación de puerta',
      direccion: 'Calle Luna 78',
      distancia: 'A 3.1 km de ti',
      precio: '40.00',
      hora: '12:00 p. m.',
      colorBg: '#FDF6ED',
      icono: <Hammer size={responsive.font(22)} color="#A27B5C" />,
    },
  ]);

  const handleAceptar = (id) => {
    console.log(`Solicitud {id} aceptada`);
  };

  const handleRechazar = (id) => {
    setSolicitudes(prev => prev.filter(item => item.id !== id));
  };

  // 2. FUNCIÓN SEPARADA PARA RENDERIZAR CADA TARJETA (Mejora legibilidad)
  const renderItem = ({ item }) => (
    <View style={styles.card}>

      {/* ENCABEZADO DE TARJETA */}
      <View style={styles.cardHeader}>
        <View style={[styles.iconCircle, { backgroundColor: item.colorBg }]}>
          {item.icono}
        </View>

        <View style={styles.headerTextContainer}>
          <View style={styles.tagCategoria}>
            <Text style={styles.tagText}>{item.categoria}</Text>
          </View>
          <Text style={styles.tituloText}>{item.titulo}</Text>
        </View>

        <Text style={styles.horaText}>{item.hora}</Text>
      </View>

      {/* CUERPO DE TARJETA */}
      <View style={styles.cardBody}>
        <Text style={styles.direccionText}>{item.direccion}</Text>
        <Text style={styles.distanciaText}>{item.distancia}</Text>
        <Text style={styles.precioText}>S/. {item.precio}</Text>
      </View>

      {/* ACCIONES (Botones) */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.btn, styles.btnRechazar]}
          onPress={() => handleRechazar(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.textRechazar}>Rechazar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.btnAceptar]}
          onPress={() => handleAceptar(item.id)}
          activeOpacity={0.8}
        >
          <Text style={styles.textAceptar}>Aceptar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 3. IMPLEMENTACIÓN DEL FLATLIST */}
      <FlatList
        data={solicitudes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>)
}