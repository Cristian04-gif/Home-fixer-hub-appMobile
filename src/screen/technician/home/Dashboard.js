import React, { useState, useEffect } from 'react';
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

import { getUser } from '../../../storage/AuthStorage'
import { dahsboardTechnical } from '../../../services/DahsboardTechnicalService'
import { getServicesForTechnical } from '../../../services/TechnicalService'
import { changeAvailability } from '../../../services/TechnicalService';

import ListServices from '../../../components/technical/ListServices';
import Availability from '../../../components/technical/Availability';

export default function Dashboard() {
  const navigation = useNavigation();
  const responsive = useResponsive();
  const styles = createStyles(responsive);

  const [technical, setTecnical] = useState({});
  const [dashboard, setDashboard] = useState({});
  const [myServices, setMyServices] = useState([]);
  const [isEnabled, setIsEnabled] = useState(dashboard.available || true);

  const actualizarEstado = (data) => {
    setIsEnabled(data);
  }


  const handleInfo = async () => {
    try {
      const rawTech = await getUser();

      const tech = rawTech;
      setTecnical(tech);

      if (tech && tech.id) {
        const dash = await dahsboardTechnical(tech.id);
        setDashboard(dash);

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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>¡Hola, {technical.name}! 👋</Text>
            <Text style={styles.subGreeting}>Técnico</Text>
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
            <Text style={styles.mainCardNumber}>{dashboard.pendingQueries}</Text>
            <View style={styles.inlineLink}>
              <Text style={styles.mainCardLink}>Ver solicitudes</Text>
              <ChevronRight size={responsive.font(16)} color="#FFF" style={{ marginLeft: responsive.scale * 4 }} />
            </View>
          </View>
          <ClipboardCheck size={responsive.font(80)} color="rgba(255, 255, 255, 0.2)" style={styles.mainCardIcon} />
        </TouchableOpacity>

        {/* EN PROGRESO & COMPLETADOS */}
        <View style={styles.row}>
          <View style={styles.halfCard}>
            <Text style={styles.cardLabel}>En Proceso</Text>
            <Text style={styles.cardNumberBlue}>{dashboard.processRequests}</Text>
          </View>
          <View style={styles.halfCard}>
            <View style={styles.rowJustified}>
              <Text style={styles.cardLabel}>Completados</Text>
            </View>
            <View style={styles.completedContainer}>
              <Text style={styles.cardNumberBlue}>{dashboard.completeRequests}</Text>
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

          <View style={[styles.rowJustified, { marginTop: responsive.scale * 16 }]}>
            <Text style={styles.statItemLabel}>Ingresos</Text>
            <Text style={styles.statItemValue}>$1,250.00</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.rowJustified}>
            <Text style={styles.statItemLabel}>Calificación promedio</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.ratingValue}>{dashboard.averageRanking}</Text>
            </View>
          </View>
        </View>

        {/* DISPONIBILIDAD */}
        <Availability styles={styles} technical={technical} enabled={actualizarEstado}></Availability>

        {/* MIS SERVICIOS */}
        <ListServices styles={styles} services={myServices}></ListServices>

      </ScrollView>
    </View>
  );
}

