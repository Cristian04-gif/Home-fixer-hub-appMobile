import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Switch,
    StatusBar,
} from 'react-native'; import React from 'react'
import { useState, useEffect } from 'react'
import { getServicesForTechnical } from '../../services/TechnicalService';
import { useNavigation } from "@react-navigation/native";
import colors from '../../utils/colors';
export default function ListServices({ styles, services }) {
    const navigation = useNavigation();

    // 3. LÓGICA DE RECORTE
    const LIMITE_INICIAL = 4;
    // Si 'mostrarTodos' es false, cortamos el arreglo de 0 a 4. Si es true, pasa completo.
    const serviciosVisibles = services.slice(0, LIMITE_INICIAL);

    // Calculamos cuántos servicios quedan ocultos para el botón "+X"
    const serviciosOcultosCount = services.length - LIMITE_INICIAL;

    const colorService = [
        {
            nombre: "Mecanico",
            fondo: "#D6EAF8",
        },
        {
            nombre: "Plomero",
            fondo: "#D4F1F9",
        },
        {
            nombre: "Jardinero",
            fondo: "#D5F5E3",
        },
        {
            nombre: "Gasfitero",
            fondo: "#D1F2EB",
        },
        {
            nombre: "Electricista",
            fondo: "#FCF3CF",
        }
    ]

    return (
        <View style={styles.servicesSection}>
            <View style={styles.rowJustified}>
                <Text style={styles.statsTitle}>Mis servicios</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MyServices', { services: services, colorService: colorService})}>
                    <Text style={styles.viewAllText}>Ver todos</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.servicesGrid}>

                {/* Mapeamos solo los servicios visibles */}
                {serviciosVisibles.map((servicio) => {
                    const color = colorService.find(
                        col => col.nombre === servicio.nameService
                    );

                    return (
                        <View key={servicio.id} style={styles.serviceItemContainer}>
                            <View
                                style={[
                                    styles.iconCircle,
                                    {
                                        backgroundColor: color?.fondo || "#EEEEEE",
                                    }
                                ]}
                            >
                                <Text style={styles.iconText}>{servicio.iconService}</Text>
                            </View>

                            <Text
                                style={styles.serviceText}
                                numberOfLines={1}
                            >
                                {servicio.typeService}
                            </Text>
                        </View>
                    );
                })}

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
    )
}

