import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar, FlatList
} from 'react-native';
import { Zap, Droplet, Hammer, Leaf, Car } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/Applications.style';
import { getUser } from '../../../storage/AuthStorage';
import { queriesForTechnician } from '../../../services/TechnicalService';
export default function Applications() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  const [solicitudes, setSolicitudes] = useState([]);

  const handleBookings = async () => {
    try {
      const tech = await getUser();
      if (tech) {
        const queries = await queriesForTechnician(tech.id);
        setSolicitudes(queries);
      } else {
        console.error("error al querer optener las consultas")
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleAceptar = (id) => {
    console.log(`Solicitud {id} aceptada`);
  };

  const handleRechazar = (id) => {
    setSolicitudes(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    handleBookings();
  }, [])

  const icons = [
    {
      categoria: 'Electricista',
      colorBg: '#FDF6ED',
      icono: <Zap size={responsive.font(22)} color="#D97706" />,
    },
    {
      categoria: 'Plomero',
      colorBg: '#E8F2FF',
      icono: <Droplet size={responsive.font(22)} color="#007AFF" />,
    },
    {
      categoria: 'Carpintería',
      colorBg: '#FDF6ED',
      icono: <Hammer size={responsive.font(22)} color="#A27B5C" />,
    },
    {
      categoria: 'Jardinero',
      colorBg: '#D5F5E3',
      icono: <Leaf size={responsive.font(22)} color="#58D68D" />,
    },
    {
      categoria: 'Mecanico',
      colorBg: '#D6EAF8',
      icono: <Car size={responsive.font(22)} color="#5DADE2" />,
    },
  ]

  // 2. FUNCIÓN SEPARADA PARA RENDERIZAR CADA TARJETA (Mejora legibilidad)
  const renderItem = ({ item }) => {
    const iconos = icons.find(ic => ic.categoria === item.serviceType);
    return (
      <View style={styles.card}>

        {/* ENCABEZADO DE TARJETA */}
        <View style={styles.cardHeader}>
          <View style={[styles.iconCircle, { backgroundColor: iconos.colorBg }]}>
            {iconos.icono}
          </View>

          <View style={styles.headerTextContainer}>
            <View style={styles.tagCategoria}>
              <Text style={styles.tagText}>{item.serviceType}</Text>
            </View>
            <Text style={styles.tituloText}>{item.title}</Text>
          </View>

          <Text style={styles.horaText}>{item.inquiryDate}</Text>
        </View>

        {/* CUERPO DE TARJETA */}
        <View style={styles.cardBody}>
          <Text style={styles.direccionText}>{item.detailedAddress}</Text>
          <Text style={styles.distanciaText}>A {item.distanceKm.toFixed(2)} km de ti</Text>
          <Text style={styles.precioText}>S/. {item.totalAmount}</Text>
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

      </View>)
  };

  return (
    <View style={styles.container}>

      {solicitudes.length === 0 ?
        <>
        <Text>Por el momento no tienes solicitudes</Text>
        </> : <>
          {/* 3. IMPLEMENTACIÓN DEL FLATLIST */}
          <FlatList
            data={solicitudes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          /></>}


    </View>)
}