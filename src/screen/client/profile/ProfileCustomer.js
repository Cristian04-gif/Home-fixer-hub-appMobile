import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Bell,
  ChevronRight,
  User,
  Briefcase,
  CreditCard,
  Settings,
  Edit2,
  Zap,
  Droplet,
  Hammer,
  Brush
} from 'lucide-react-native';

import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/ProfileCustomer.syle'
import colors from '../../../utils/colors';
import { useAuth } from '../../../context/AuthContext';
import { getUser } from '../../../storage/AuthStorage';
export default function ProfileCustomer() {
  const {logoutContext} = useAuth();
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();

  const [customer, setCustomer] = useState({});



  const handleInfo = async () => {
    try {
      const rawCustomer = await getUser();
      const cust = rawCustomer;

      setCustomer(cust);


    } catch (error) {
      console.error("Error al parsear o cargar info del cliente:", error);
    }
  }

  useEffect(() => {
    handleInfo();
  }, [])



  // 1. LISTA DE OPCIONES DEL MENÚ INFERIOR
  const opcionesMenu = [
    { id: '1', titulo: 'Información personal', icono: <User size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '2', titulo: 'Mis herramientas', icono: <Briefcase size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '3', titulo: 'Métodos de pago', icono: <CreditCard size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '4', titulo: 'Configuración', icono: <Settings size={responsive.font(22)} color={colors.textPrimary} /> },
  ];

  const cerrarSesion = async () => {
    try {
      await logoutContext();
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* HEADER AZUL SUPERIOR */}
        <View style={styles.topHeader}>
          <Image source={require('../../../assets/onda-superior.png')} style={styles.topWave}></Image>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={responsive.font(24)} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* CONTENEDOR DE PERFIL (Desplazado hacia arriba para superponerse) */}
        <View style={styles.profileCard}>
          {/* Avatar con botón de editar */}
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: customer.urlPhotoProfile }} // Cambia por tu recurso local o URL real de Carlos
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton} activeOpacity={0.9}>
              <Edit2 size={12} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Información del cliente */}
          <Text style={styles.nameText}>{customer.name} {customer.lastName}</Text>
          <Text style={styles.roleText}>Cliente</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingText}>{customer.averageRating} </Text>
            <Text style={styles.reviewsText}></Text>
          </View>
        </View>


        {/* MENÚ DE OPCIONES DE CONFIGURACIÓN */}
        <View style={styles.menuContainer}>
          {opcionesMenu.map((opcion, index) => (
            <View key={opcion.id}>
              <TouchableOpacity style={styles.menuRow} activeOpacity={0.6}>
                <View style={styles.menuLeft}>
                  {opcion.icono}
                  <Text style={styles.menuRowTitle}>{opcion.titulo}</Text>
                </View>
                <ChevronRight size={responsive.font(20)} color="#C7C7CC" />
              </TouchableOpacity>
              {/* Evitamos dibujar el divisor en el último elemento */}
              {index < opcionesMenu.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* BOTÓN DE CERRAR SESION */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.btnLogaut}
            onPress={cerrarSesion}
            activeOpacity={0.8}
          >
            <Text style={styles.btnLogautText}>Cerrar Sesion</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
