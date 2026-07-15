import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {
  Bell,
  Search,
  SlidersHorizontal,
  ChevronRight,
  ClipboardList,
  Zap,
  Droplet,
  Hammer,
  Brush,
  Lock,
  Leaf,
  Sparkles
} from 'lucide-react-native';
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/DashboardClient.style';
import { useNavigation } from "@react-navigation/native";
import colors from '../../../utils/colors';
import { getUser } from '../../../storage/AuthStorage';
import { getCatalogServices } from '../../../services/CatalogService';
import { registerForPushNotificationsAsync } from '../../../services/NotificationService';
import { savePushTokenCustomer } from '../../../services/CustomerService';
import { useSymbols } from '../../../hooks/useSymbols';
export default function DashboardClient() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();

  const [customer, setCustomer] = useState({})
  const [catalog, setCatalog] = useState([]);

  const handleInfoCustomer = async () => {
    try {
      const rawUser = await getUser();
      setCustomer(rawUser);

      if (rawUser && rawUser.id) {
        const services = await getCatalogServices();
        setCatalog(services);
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleNotification = async () => {
    try {
      const pushToken = await registerForPushNotificationsAsync();
      const rawUser = await getUser();
      if (rawUser && rawUser.id) {
        savePushTokenCustomer(rawUser.id, pushToken);
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleInfoCustomer();
    handleNotification();
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>¡Hola, {customer.name}! 👋</Text>
            <Text style={styles.subGreeting}>¿Qué servicio necesitas hoy?</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={responsive.font(24)} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* BARRA DE BÚSQUEDA Y FILTRO */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Search size={responsive.font(20)} color={colors.placeholder} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar servicio..."
              placeholderTextColor={colors.placeholder}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <SlidersHorizontal size={responsive.font(20)} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* SOLICITUDES EN CURSO (CARD PRINCIPAL) */}
        <TouchableOpacity style={styles.mainCard} activeOpacity={0.9}>
          <View style={styles.mainCardContent}>
            <Text style={styles.mainCardTitle}>Solicitudes en curso</Text>
            <Text style={styles.mainCardNumber}>2</Text>
            <View style={styles.inlineLink}>
              <Text style={styles.mainCardLink}>Ver mis solicitudes</Text>
              <ChevronRight size={responsive.font(16)} color={colors.white} style={{ marginLeft: 4 }} />
            </View>
          </View>
          <ClipboardList size={responsive.font(80)} color="rgba(255, 255, 255, 0.15)" style={styles.mainCardIcon} />
        </TouchableOpacity>

        {/* SECCIÓN CATEGORÍAS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categorías</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ServiceCatalog', { services: catalog })}>
            <Text style={styles.viewAllText}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        {/* GRID DE CATEGORÍAS */}
        <View style={styles.categoriesGrid}>
          {catalog.map((item) => {
            const { value } = useSymbols(item.name, responsive);
            return (
              <TouchableOpacity key={item.id} style={styles.categoryItem} activeOpacity={0.7}>
                <View style={[styles.iconCircle, { backgroundColor: value.color }]}>
                  {value.icono}
                </View>
                <Text style={styles.categoryText} numberOfLines={1}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>

        {/* BANNER PROMOCIONAL / BIENVENIDA */}
        <View style={styles.promoBanner}>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTitle}>¿Eres nuevo aquí?</Text>
            <Text style={styles.promoSubtitle}>Conoce cómo funciona Home Fix Hub</Text>
            <TouchableOpacity style={styles.promoLinkContainer} activeOpacity={0.7}>
              <Text style={styles.promoLinkText}>Ver guía</Text>
              <ChevronRight size={responsive.font(16)} color={colors.primary} style={{ marginLeft: 2 }} />
            </TouchableOpacity>
          </View>

          {/* Ilustración simulada del mockup */}
          <View style={styles.promoImageWrapper}>
            <Image
              source={{ uri: customer.urlPhotoProfile }}
              style={styles.promoImage}
            />
            {/* Pequeño círculo verde decorativo del fondo */}
            <View style={styles.greenCircleDecoration} />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
