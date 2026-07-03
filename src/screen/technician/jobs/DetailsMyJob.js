import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import { ChevronLeft, MoreHorizontal, CheckCircle2, Circle } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/DetailsMyJob.style';
import colors from '../../../utils/colors';

export default function DetailsMyJob({ route }) {
  const { detail, cliente, fecha } = route.params;

  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  // ESTADOS PRINCIPALES
  const [trabajo, setTrabajo] = useState(detail);
  const [loading, setLoading] = useState(true);
  const [actualizando, setActualizando] = useState(false);

  const fetchTrabajoDetalle = async () => {
    setLoading(true);
    try {

    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener la información.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrabajoDetalle();
  }, []);

  const handleAvanzarEstado = async () => {
    if (trabajo.inquiryStatus === 'FINALIZADA') return;

    setActualizando(true);
    try {
      // Determinamos cuál es el siguiente paso del ENUM
      const siguienteStatus = trabajo.inquiryStatus === 'ACEPTADA' ? 'EN_PROCESO' : 'FINALIZADA';

      // const response = await fetch(`https://tu-api.com/api/tecnico/trabajos/${trabajoId}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: siguienteStatus }) // Enviamos el enum crudo
      // });

      await new Promise((resolve) => setTimeout(resolve, 800));

      const horaActualStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();

      setTrabajo((prev) => ({
        ...prev,
        inquiryStatus: siguienteStatus,
        modificationDate: horaActualStr
      }));

      if (siguienteStatus === 'FINALIZADA') {
        Alert.alert('¡Excelente!', 'Servicio marcado como FINALIZADA.');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo actualizar el estado.');
    } finally {
      setActualizando(false);
      navigation.goBack();
    }
  };

  if (loading) {
    return <View style={[styles.container, styles.center]}><ActivityIndicator size="large" color="#3A6B88" /></View>;
  }

  const obtenerConfigSegunEnum = () => {
    switch (trabajo.inquiryStatus) {
      case 'ACEPTADA':
        return {
          pasosCompletados: [true, false, false],
          horas: [trabajo.modificationDate, 'Pendiente', 'Pendiente'],
          btnTexto: 'Iniciar Servicio (En proceso)',
          btnColor: '#3A6B88',
          badgeTexto: 'Aceptada'
        };
      case 'EN_PROCESO':
        return {
          pasosCompletados: [true, true, false],
          horas: [trabajo.modificationDate.split(', ')[1], trabajo.modificationDate, 'Pendiente'],
          btnTexto: 'Marcar como finalizada',
          btnColor: '#4CAF50', // Verde esmeralda del mockup
          badgeTexto: 'En progreso'
        };
      case 'FINALIZADA':
        return {
          pasosCompletados: [true, true, true],
          horas: [trabajo.modificationDate.split(', ')[1], 'Completado', trabajo.modificationDate],
          btnTexto: 'Trabajo concluido',
          btnColor: '#8E8E93',
          btnDeshabilitado: true,
          badgeTexto: 'Finalizada'
        };
    }
  };

  const uiConfig = obtenerConfigSegunEnum();

  const pasosTimeline = [
    { id: 'ACEPTADA', titulo: 'Trabajo Aceptado', index: 0 },
    { id: 'EN_PROCESO', titulo: 'Trabajo en proceso', index: 1 },
    { id: 'FINALIZADA', titulo: 'Finalizar trabajo', index: 2 },
  ];
  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* ENCABEZADO */}
        <View style={styles.headerCard}>
          <View style={styles.badgeContainer}>
            <View style={[styles.badge, trabajo.inquiryStatus === 'FINALIZADA' ? styles.badgeVerde : styles.badgeAzul]}>
              <Text style={[styles.badgeText, trabajo.inquiryStatus === 'FINALIZADA' ? styles.badgeTextVerde : styles.badgeTextAzul]}>
                {uiConfig.badgeTexto}
              </Text>
            </View>
          </View>
          <Text style={styles.jobTitle}>{trabajo.title}</Text>
          <Text style={styles.customerText}>Cliente: <Text style={styles.darkText}>{cliente.name} {cliente.lastName}</Text></Text>
          <Text style={styles.addressText}>{trabajo.detailedAddress}</Text>
        </View>

        {/* INFORMACIÓN COMPLEMENTARIA */}
        <Text style={styles.sectionLabel}>Información del trabajo</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}><Text style={styles.infoKey}>Fecha</Text><Text style={styles.infoValue}>{fecha.horaFormateada} | {fecha.fechaFormateada}</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoKey}>Servicio</Text><Text style={styles.infoValue}>{trabajo.serviceType}</Text></View>
          <View style={styles.infoRow}><Text style={styles.infoKey}>Precio acordado</Text><Text style={styles.priceValue}>S/.{trabajo.totalAmount}.00</Text></View>
        </View>

        {/* TIMELINE ADAPTADO AL ENUM */}
        <Text style={styles.sectionLabel}>Estado</Text>
        <View style={styles.timelineContainer}>
          {pasosTimeline.map((paso) => {
            const esCompletado = uiConfig.pasosCompletados[paso.index];
            const esUltimo = paso.index === pasosTimeline.length - 1;
            // La línea se pinta verde si el paso Siguiente también está completado
            const lineaActiva = esCompletado && uiConfig.pasosCompletados[paso.index + 1];

            return (
              <View key={paso.id} style={styles.timelineNode}>
                <View style={styles.leftTimelineColumn}>
                  {esCompletado ? (
                    <CheckCircle2 size={22} color="#4CAF50" fill="#E8F7ED" />
                  ) : (
                    <Circle size={22} color="#D1D1D6" />
                  )}
                  {!esUltimo && (
                    <View style={[styles.connectorLine, lineaActiva && styles.connectorActive]} />
                  )}
                </View>

                <View style={styles.rightTimelineColumn}>
                  <Text style={[styles.statusTitle, esCompletado ? styles.darkText : styles.mutedText]}>
                    {paso.titulo}
                  </Text>
                  <Text style={styles.statusTime}>{uiConfig.horas[paso.index]}</Text>
                </View>
              </View>
            );
          })}
        </View>

      </ScrollView>

      {/* ACCIÓN PRINCIPAL INFERIOR */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[
            styles.mainActionButton,
            { backgroundColor: uiConfig.btnColor },
            (uiConfig.btnDeshabilitado || actualizando) && { opacity: 0.6 }
          ]}
          onPress={handleAvanzarEstado}
          disabled={uiConfig.btnDeshabilitado || actualizando}
          activeOpacity={0.8}
        >
          {actualizando ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.mainActionButtonText}>{uiConfig.btnTexto}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

