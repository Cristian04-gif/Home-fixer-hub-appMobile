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
import { getCustomersId } from '../../../services/CustomerService';
import { acceptQuery,rejectQuery } from '../../../services/TechnicalService';
import {formatDate} from '../../../hooks/formatDate';
import { useSymbols } from '../../../hooks/useSymbols';
export default function Applications() {
  const responsive = useResponsive();
  const styles = createStyles(responsive);
  const navigation = useNavigation();
  const [solicitudes, setSolicitudes] = useState([]);
  const [customers, setCustomers] = useState([])
  const [actionButton, setActionButton] = useState(false);
    const handleBookings = async () => {
      try {
        const tech = await getUser();
        if (tech) {
          const queries = await queriesForTechnician(tech.id);
          setSolicitudes(queries);

          if (queries.length > 0) {
            const clis = await Promise.all(
              queries.map(cli => getCustomersId(cli.customerId))
            );

            setCustomers(clis);
          }
        } else {
          console.error("error al querer obtener las consultas");
        }
      } catch (error) {
        console.error(error);
      }
    }


    const handleAceptar = async(id) => {
      try {
            const res = await acceptQuery(id);
            if(res){
              setActionButton(true);
            }
          } catch (error) {
            console.error(error);
          }
    };

    const handleRechazar = async (id) => {
      try {
            const res = await rejectQuery(id);
            if(res){
              setActionButton(true);
            }
          } catch (error) {
            console.error(error);
          }
      //setSolicitudes(prev => prev.filter(item => item.id !== id));
    };

    useEffect(() => {
      handleBookings();
      if(actionButton) setActionButton(false);
    }, [actionButton])

    

    const renderItem = ({ item }) => {
      const cliente = customers.find(cli => cli.id == item.customerId)
      const { value } = useSymbols(item.serviceType, responsive);
      const fecha = formatDate(item.inquiryDate);
      return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ApplicationDetails", { details: item, client: cliente })}>

          {/* ENCABEZADO DE TARJETA */}
          <View style={styles.cardHeader}>
            <View style={[styles.iconCircle, { backgroundColor: value.color }]}>
              {value.icono}
            </View>

            <View style={styles.headerTextContainer}>
              <View style={styles.tagCategoria}>
                <Text style={styles.tagText}>{item.serviceType}</Text>
              </View>
              <Text style={styles.tituloText}>{item.title}</Text>
            </View>

            <Text style={styles.horaText}>{fecha.fechaFormateada}</Text>
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

        </TouchableOpacity>)
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