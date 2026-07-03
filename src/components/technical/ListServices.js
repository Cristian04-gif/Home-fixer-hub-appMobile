import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Switch,
    StatusBar,
} from 'react-native'; import React from 'react'
import { Plus } from 'lucide-react-native';
import { useState, useEffect } from 'react'
import { getServicesForTechnical } from '../../services/TechnicalService';
import { useNavigation } from "@react-navigation/native";
import colors from '../../utils/colors';
export default function ListServices({ styles, services }) {
    const navigation = useNavigation();

    const LIMITE_INICIAL = 4;
    const serviciosVisibles = services.slice(0, LIMITE_INICIAL);

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
            {services.length === 0 ?
                <>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.statItemLabel}>Registra tus habilidades para que puedas ser contactado</Text>
                        <TouchableOpacity style={styles.addButton} activeOpacity={0.8} onPress={() => navigation.navigate('NewService')}>
                            <Plus size={22} color="#FFF" style={{ marginRight: 8 }} />
                            <Text style={styles.addButtonText}>Agregar servicio</Text>
                        </TouchableOpacity>
                    </View>
                </> :
                <>
                    <View style={styles.rowJustified}>
                        <Text style={styles.statsTitle}>Mis servicios</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('MyServices', { services: services, colorService: colorService })}>
                            <Text style={styles.viewAllText}>Ver todos</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.servicesGrid}>

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
                </>}

        </View>
    )
}

