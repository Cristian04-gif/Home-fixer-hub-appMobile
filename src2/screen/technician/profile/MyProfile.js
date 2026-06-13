import React, { useState } from 'react';
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
export default function MyProfile() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // 1. LISTA DE OPCIONES DEL MENÚ INFERIOR
  const opcionesMenu = [
    { id: '1', titulo: 'Información personal', icono: <User size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '2', titulo: 'Mis herramientas', icono: <Briefcase size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '3', titulo: 'Métodos de pago', icono: <CreditCard size={responsive.font(22)} color={colors.textPrimary} /> },
    { id: '4', titulo: 'Configuración', icono: <Settings size={responsive.font(22)} color={colors.textPrimary} /> },
  ];

  const misServicios = [
    { id: '1', nombre: 'Electricidad', color: '#EBF7EE', icono: <Zap size={responsive.font(22)} color="#34C759" /> },
    { id: '2', nombre: 'Plomería', color: '#E8F2FF', icono: <Droplet size={responsive.font(22)} color="#007AFF" /> },
    { id: '3', nombre: 'Carpintería', color: '#FDF6ED', icono: <Hammer size={responsive.font(22)} color="#A27B5C" /> },
    { id: '4', nombre: 'Pintura', color: '#E8F8F5', icono: <Brush size={responsive.font(22)} color="#1ABC9C" /> },
    { id: '5', nombre: 'Jardinería', color: '#EAF9E7', icono: <Zap size={responsive.font(22)} color="#4A7C59" /> },
    { id: '6', nombre: 'Mudanza', color: '#F5E6FE', icono: <Zap size={responsive.font(22)} color="#9B5DE5" /> },
    { id: '7', nombre: 'Limpieza', color: '#FFF0F5', icono: <Zap size={responsive.font(22)} color="#FF6B6B" /> },
  ];
  // 3. LÓGICA DE RECORTE
  const LIMITE_INICIAL = 4;
  // Si 'mostrarTodos' es false, cortamos el arreglo de 0 a 4. Si es true, pasa completo.
  const serviciosVisibles = misServicios.slice(0, LIMITE_INICIAL);

  // Calculamos cuántos servicios quedan ocultos para el botón "+X"
  const serviciosOcultosCount = misServicios.length - LIMITE_INICIAL;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
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
              source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' }} // Cambia por tu recurso local o URL real de Carlos
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton} activeOpacity={0.9}>
              <Edit2 size={12} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Información del técnico */}
          <Text style={styles.nameText}>Carlos Rodríguez</Text>
          <Text style={styles.roleText}>Técnico Eléctrico</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingText}>4.8 </Text>
            <Text style={styles.reviewsText}>(32 reseñas)</Text>
          </View>
        </View>

        {/* DISPONIBILIDAD */}
        <View style={styles.availabilityCard}>
          <View>
            <Text style={styles.sectionTitle}>Disponibilidad</Text>
            <Text style={[styles.availabilitySub, { color: isEnabled ? colors.enable : colors.disable }]}>
              {isEnabled ? 'En línea' : 'Fuera de línea'}
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: colors.enable }}
            thumbColor={colors.white}
            ios_backgroundColor="#E9E9EA"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* SERVICIOS QUE OFRECE */}
        <View style={styles.servicesSection}>
          <View style={styles.rowJustified}>
            <Text style={styles.statsTitle}>Mis servicios</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MyServices')}>
              <Text style={styles.viewAllText}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesGrid}>

            {/* Mapeamos solo los servicios visibles */}
            {serviciosVisibles.map((servicio) => (
              <View key={servicio.id} style={styles.serviceItemContainer}>
                <View style={[styles.iconCircle, { backgroundColor: servicio.color }]}>
                  {servicio.icono}
                </View>
                <Text style={styles.serviceText} numberOfLines={1}>
                  {servicio.nombre}
                </Text>
              </View>
            ))}

            {/* BOTÓN DINÁMICO DE "VER MÁS" (+X) */}
            {/* Solo se muestra si NO estamos enseñando todos y si realmente hay servicios ocultos */}
            {serviciosOcultosCount > 0 && (
              <TouchableOpacity
                style={styles.serviceItemContainer}
              >
                <View style={[styles.iconCircle, { backgroundColor: colors.background }]}>
                  <Text style={styles.plusMoreText}>+{serviciosOcultosCount}</Text>
                </View>
                <Text style={styles.serviceText} numberOfLines={1}>Más</Text>
              </TouchableOpacity>
            )}
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

      </ScrollView>
    </View>
  );
}
