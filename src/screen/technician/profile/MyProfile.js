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
import { createStyles } from '../../../styles/MyProfile.style';
import colors from '../../../utils/colors';

import { getUser } from '../../../storage/AuthStorage';
import { getServicesForTechnical } from '../../../services/TechnicalService';
import ListServices from '../../../components/technical/ListServices';
import Availability from '../../../components/technical/Availability';
export default function MyProfile() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();

  const [technical, setTechnical] = useState({});
  const [isEnabled, setIsEnabled] = useState(technical.available || true);
  const [myServices, setMyServices] = useState([]);

  const actualizarEstado = (data) => {
    setIsEnabled(data);
  }

  const handleInfo = async () => {
    try {
      const rawTech = await getUser();

      const tech = rawTech;

      setTechnical(tech);

      if (tech && tech.id) {
        const myServ = await getServicesForTechnical(tech.id);
        setMyServices(myServ);
      } else {
        console.error("El objeto técnico no contiene un ID válido");
      }
    } catch (error) {
      console.error("Error al parsear o cargar info del técnico:", error);
    }
  }

  useEffect(() => {
    handleInfo();
  }, [isEnabled])



  // 1. LISTA DE OPCIONES DEL MENÚ INFERIOR
  const opcionesMenu = [
    { id: '1', titulo: 'Información personal', icono: <User size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '2', titulo: 'Mis herramientas', icono: <Briefcase size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '3', titulo: 'Métodos de pago', icono: <CreditCard size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '4', titulo: 'Configuración', icono: <Settings size={responsive.font(22)} color={colors.textPrimary} /> },
  ];


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
              source={{ uri: technical.urlPhotoProfile }} // Cambia por tu recurso local o URL real de Carlos
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton} activeOpacity={0.9}>
              <Edit2 size={12} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Información del técnico */}
          <Text style={styles.nameText}>{technical.name} {technical.lastName}</Text>
          <Text style={styles.roleText}>Técnico</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingText}>{technical.averageRating} </Text>
            <Text style={styles.reviewsText}></Text>
          </View>
        </View>

        {/* DISPONIBILIDAD */}
        <Availability styles={styles} technical={technical} enabled={actualizarEstado} enable={isEnabled}></Availability>

        {/* SERVICIOS QUE OFRECE */}
        <ListServices styles={styles} services={myServices}></ListServices>

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

      </ScrollView>
    </View>
  );
}
