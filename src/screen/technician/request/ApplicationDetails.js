import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Dimensions,
} from "react-native";
import { ChevronLeft, MessageSquare, MapPin } from "lucide-react-native";

import { getLocation } from "../../../hooks/useLocation";
import MapRoute from "../../../components/technical/MapRoute";
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from "../../../styles/ApplicationDetails.style";
import colors from "../../../utils/colors";
import { acceptQuery,rejectQuery } from "../../../services/TechnicalService";
export default function ApplicationDetails({ route }) {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  const { details, client } = route.params;
  const [loading, setLoading] = useState(true);
  const [procesandoAccion, setProcesandoAccion] = useState(false);
  const [coordenadas, setCoordenadas] = useState({});

  const fetchSolicitudTecnico = async () => {
    try {
      const { latitude, longitude } = await getLocation();
      const coors = {
        origenTecnico: { latitude: latitude, longitude: longitude },
        destinoCliente: {
          latitude: details.latitudeCustomer,
          longitude: details.longitudeCustomer,
        },
      };


      if (coors) {
        setCoordenadas(coors);
      }
    } catch (error) {
      Alert.alert("Error", "No se pudieron cargar los datos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSolicitudTecnico();
  }, []);

  const handleAcceptQuery = async () => {

    try {
      const res = await acceptQuery(details.id);
      if (res) {
        navigation.navigate("Applications");
      }
    } catch (error) {

    }
  }

  const handleRejectQuery = async() =>{
    try {
      const res = await rejectQuery(details.id);
      if (res) {
        navigation.navigate("Applications");
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* MAPA VISUAL SUPERIOR */}
        <MapRoute styles={styles} coordenadas={coordenadas}></MapRoute>

        {/* details DE ENTRADA (CATEGORÍA Y PRECIO) */}
        <View style={styles.categoryPriceRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>{details.serviceType}</Text>
          </View>
          <Text style={styles.priceText}>S/.{details.totalAmount}.00</Text>
        </View>

        {/* TÍTULO PRINCIPAL */}
        <Text style={styles.mainJobTitle}>{details.title}</Text>

        {/* SECCIÓN CLIENTE */}
        <Text style={styles.sectionLabel}>Cliente</Text>
        <View style={styles.clienteCard}>
          <Image
            source={{ uri: client.urlPhotoProfile }}
            style={styles.avatar}
          />
          <View style={styles.clienteInfo}>
            <Text style={styles.clienteName}>{client.name} {client.lastName}</Text>
            <Text style={styles.clienteRating}>
              ★ {client.averageRating}{" "}
            </Text>
          </View>
          <TouchableOpacity style={styles.chatButton} activeOpacity={responsive.scale * 0.7}>
            <MessageSquare size={responsive.font(20)} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* DIRECCIÓN */}
        <Text style={styles.sectionLabel}>Dirección</Text>
        <View style={styles.metaLocationRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.mainMetaText}>{details.detailedAddress}</Text>
            <Text style={styles.subMetaText}>A {details.distanceKm.toFixed(2)} km de tu ubicacion</Text>
          </View>
          <MapPin size={responsive.font(25)} color={colors.primary} />
        </View>

        {/* DESCRIPCIÓN */}
        <Text style={styles.sectionLabel}>Descripción</Text>
        <Text style={styles.descriptionText}>{details.description}</Text>


      </ScrollView>

      {/* BARRA INFERIOR DE ACCIONES PARA EL TÉCNICO */}
      <View style={styles.bottomFixedBar}>
        <TouchableOpacity
          style={[styles.btnRechazar, procesandoAccion && { opacity: responsive.scale * 0.5 }]}
          onPress={handleRejectQuery}
          disabled={procesandoAccion}
          activeOpacity={0.7}
        >
          <Text style={styles.textRechazar}>Rechazar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnAceptar, procesandoAccion && { opacity: responsive.scale * 0.8 }]}
          onPress={handleAcceptQuery}
          disabled={procesandoAccion}
          activeOpacity={0.8}
        >
          {procesandoAccion ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.textAceptar}>Aceptar solicitud</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
