import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../../../hooks/useResponsive';
import { createStyles } from '../../../styles/MyJobs.style';
import colors from '../../../utils/colors';
import { getJobsTechnical } from '../../../services/TechnicalService';
import { getUser } from '../../../storage/AuthStorage';
import { getCustomersId } from '../../../services/CustomerService';
import { formatDate } from '../../../hooks/formatDate';
export default function MyJobs() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('EN_PROCESO');
  const [trabajos, setTrabajos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTrabajos = async () => {
    setLoading(true);
    try {
      const tech = await getUser();
      const res = await getJobsTechnical(tech.id);


      if (res.length > 0) {

        const clis = await Promise.all(
          res.map(cli => getCustomersId(cli.customerId))
        );
        setClientes(clis)
      }
      setTrabajos(res);
      // --------------------------------------------
    } catch (error) {
      console.error('Error cargando trabajos:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const mockProgreso = trabajos.filter(job => job.inquiryStatus === 'EN_PROCESO').length

  const mockHistorial = trabajos.filter(job => job.inquiryStatus === 'FINALIZADA').length

  const mockAceptada = trabajos.filter(job => job.inquiryStatus === 'ACEPTADA').length




  useEffect(() => {
    fetchTrabajos();
  }, []);

  const solicitudesFiltradas = trabajos.filter(item => {
    return item.inquiryStatus === activeTab;
  });

  const handleRefresh = () => {
    setRefreshing(true);
    fetchTrabajos();
  };

  const renderTrabajoCard = ({ item }) => {
    const cl = clientes.find(c => c.id === item.customerId);
    const fecha = formatDate(item.modificationDate);

    return (<TouchableOpacity
      style={styles.card}
      activeOpacity={responsive.scale * 0.7}
      onPress={() => navigation.navigate('DetailsMyJob', { detail: item, cliente: cl, fecha: fecha })}
    >
      <View style={styles.cardMainContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>Cliente: <Text style={styles.boldText}>{cl.name} {cl.lastName}</Text></Text>

        {/* Badge de Estado Dinámico */}
        <View style={[
          styles.badge,
          item.inquiryStatus === 'EN_PROCESO' ? styles.badgeProgreso : item.inquiryStatus === 'ACEPTADA' ? styles.badgeAceptado : styles.badgeCompletado
        ]}>
          <Text style={[
            styles.badgeText,
            item.inquiryStatus === 'EN_PROCESO' ? styles.badgeTextProgreso : item.inquiryStatus === 'ACEPTADA' ? styles.badgeTextAceptado : styles.badgeTextCompletado
          ]}>
            {item.inquiryStatus}
          </Text>
        </View>

        <Text style={styles.cardMetaText}>{fecha.fechaFormateada} | {fecha.horaFormateada}</Text>
        <Text style={styles.cardMetaText}>{item.description}</Text>
        <Text style={styles.cardPrice}>S/.{item.totalAmount}.00</Text>
      </View>

      <View style={styles.cardRightArrow}>
        <ChevronRight size={responsive.font(20)} color={colors.textPrimary} />
      </View>
    </TouchableOpacity>)

  };

  return (
    <View style={styles.container}>

      {/* CONTROL DE PESTAÑAS (TABS) */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'EN_PROCESO' && styles.activeTabButton]}
          onPress={() => setActiveTab('EN_PROCESO')}
          activeOpacity={0.9}
        >
          <Text style={[styles.tabText, activeTab === 'EN_PROCESO' && styles.activeTabText]}>
            En progreso ({mockProgreso})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'ACEPTADA' && styles.activeTabButton]}
          onPress={() => setActiveTab('ACEPTADA')}
          activeOpacity={0.9}
        >
          <Text style={[styles.tabText, activeTab === 'ACEPTADA' && styles.activeTabText]}>
            Aceptados ({mockAceptada})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'FINALIZADA' && styles.activeTabButton]}
          onPress={() => setActiveTab('FINALIZADA')}
          activeOpacity={0.9}
        >
          <Text style={[styles.tabText, activeTab === 'FINALIZADA' && styles.activeTabText]}>
            Historial ({mockHistorial})
          </Text>
        </TouchableOpacity>
      </View>

      {/* LISTADO DE TRABAJOS CON CONTROL DE CARGA */}
      {loading && !refreshing ? (
        <View style={styles.centerLoader}>
          <ActivityIndicator size="large" color="#3A6B88" />
        </View>
      ) : (
        <FlatList
          data={solicitudesFiltradas}
          keyExtractor={(item) => item.id}
          renderItem={renderTrabajoCard}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          ListEmptyComponent={
            <View style={styles.centerLoader}>
              <Text style={styles.emptyText}>No tienes servicios en esta sección.</Text>
            </View>
          }
        />
      )}
    </View>
  );
}

