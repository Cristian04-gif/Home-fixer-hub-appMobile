import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
} from 'react-native';
import { Bell, ChevronRight, ClipboardCheck, Zap, Droplet, Hammer, Brush } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/Dashboard.style';
import colors from '../../../utils/colors';


export default function Dashboard() {
  const navigation = useNavigation();
  const responsive = useResponsive();
  const styles = createStyles(responsive);

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const misServicios = [
    { id: '1', nombre: 'Electricidad', color: '#EBF7EE', icono: <Zap size={responsive.font(22)} color="#34C759" /> },
    { id: '2', nombre: 'Plomería', color: '#E8F2FF', icono: <Droplet size={responsive.font(22)} color="#007AFF" /> },
    { id: '3', nombre: 'Carpintería', color: '#FDF6ED', icono: <Hammer size={responsive.font(22)} color="#A27B5C" /> },
    { id: '4', nombre: 'Pintura', color: '#E8F8F5', icono: <Brush size={responsive.font(22)} color="#1ABC9C" /> },
    { id: '5', nombre: 'Jardinería', color: '#EAF9E7', icono: <Zap size={responsive.font(22)} color="#4A7C59" /> },
    { id: '6', nombre: 'Mudanza', color: '#F5E6FE', icono: <Zap size={responsive.font(22)} color="#9B5DE5" /> },
    { id: '7', nombre: 'Limpieza', color: '#FFF0F5', icono: <Zap size={responsive.font(22)} color="#FF6B6B" /> },
  ];
  const servicesData = [
  { id: '1', title: 'Electricidad', icon: <Zap size={responsive.font(22)} color="#34C759" />, bgColor: '#EBF7EE' },
  { id: '2', title: 'Plomería', icon: <Droplet size={responsive.font(22)} color="#007AFF" />, bgColor: '#E8F2FF' },
  { id: '3', title: 'Carpintería', icon: <Hammer size={responsive.font(22)} color="#A27B5C" />, bgColor: '#FDF6ED' },
  { id: '4', title: 'Pintura', icon: <Brush size={responsive.font(22)} color="#1ABC9C" />, bgColor: '#E8F8F5' },
  { id: '5', title: '', icon: <Text style={{ fontSize: 14, fontWeight: '600', color: '#3A3A3C' }}>+2</Text>, bgColor: '#F2F2F7' },
];

  // 3. LÓGICA DE RECORTE
  const LIMITE_INICIAL = 4;
  // Si 'mostrarTodos' es false, cortamos el arreglo de 0 a 4. Si es true, pasa completo.
  const serviciosVisibles = misServicios.slice(0, LIMITE_INICIAL);

  // Calculamos cuántos servicios quedan ocultos para el botón "+X"
  const serviciosOcultosCount = misServicios.length - LIMITE_INICIAL;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>¡Hola, Carlos! 👋</Text>
            <Text style={styles.subGreeting}>Técnico Eléctrico</Text>
            <View style={styles.statusBadge}>
              <View style={[styles.statusDot, { backgroundColor: isEnabled ? colors.enable : colors.disable }]} />
              <Text style={styles.statusText}>{isEnabled ? 'En línea' : 'Desconectado'}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={responsive.font(24)} color="#000" />
          </TouchableOpacity>
        </View>

        {/* SOLICITUDES NUEVAS (CARD PRINCIPAL) */}
        <TouchableOpacity style={styles.mainCard}>
          <View style={styles.mainCardContent}>
            <Text style={styles.mainCardTitle}>Solicitudes nuevas</Text>
            <Text style={styles.mainCardNumber}>3</Text>
            <View style={styles.inlineLink}>
              <Text style={styles.mainCardLink}>Ver solicitudes</Text>
              <ChevronRight size={responsive.font(16)} color="#FFF" style={{ marginLeft: responsive.scale*4 }} />
            </View>
          </View>
          <ClipboardCheck size={responsive.font(80)} color="rgba(255, 255, 255, 0.2)" style={styles.mainCardIcon} />
        </TouchableOpacity>

        {/* EN PROGRESO & COMPLETADOS */}
        <View style={styles.row}>
          <View style={styles.halfCard}>
            <Text style={styles.cardLabel}>En progreso</Text>
            <Text style={styles.cardNumberBlue}>2</Text>
          </View>
          <View style={styles.halfCard}>
            <View style={styles.rowJustified}>
              <Text style={styles.cardLabel}>Completados</Text>
            </View>
            <View style={styles.completedContainer}>
              <Text style={styles.cardNumberBlue}>18</Text>
              <Text style={styles.miniLabel}>Este mes</Text>
            </View>
          </View>
        </View>

        {/* ESTADÍSTICAS */}
        <View style={styles.statsCard}>
          <View style={styles.rowJustified}>
            <Text style={styles.statsTitle}>Estadísticas</Text>
            <Text style={styles.miniLabel}>(Este mes)</Text>
          </View>

          <View style={[styles.rowJustified, { marginTop: responsive.scale*16 }]}>
            <Text style={styles.statItemLabel}>Ingresos</Text>
            <Text style={styles.statItemValue}>$1,250.00</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.rowJustified}>
            <Text style={styles.statItemLabel}>Calificación promedio</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.ratingValue}>4.8</Text>
            </View>
          </View>
        </View>

        {/* DISPONIBILIDAD */}
        <View style={styles.availabilityCard}>
          <View>
            <Text style={styles.statsTitle}>Disponibilidad</Text>
            <Text style={styles.availabilitySub}>{isEnabled ? 'En línea' : 'Fuera de línea'}</Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: colors.enable }}
            thumbColor={colors.white}
            ios_backgroundColor="#E9E9EA"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* MIS SERVICIOS */}
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

      </ScrollView>
    </View>
  );
}

