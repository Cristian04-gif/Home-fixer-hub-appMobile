import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import React from "react";
import { createStyles } from '../styles/HomeCustomerStyle';

import { useResponsive } from "../utils/useResponsive";

//components
import EvilIcons from "@expo/vector-icons/EvilIcons";
import colors from "../utils/colors";


//import { createStyles } from '../styles/HomeCustomerStyle';
//import { useResponsive } from "../utils/useResponsive";

function UserLogged({styles }) {
    return (
        <View style={styles.logged}>
            <View style={styles.infoUser}>
                <Text style={styles.welcomeMessage}>Bienvenido,</Text>
            </View>
            <View style={styles.searchBar}>
                <EvilIcons name="search" style={styles.lupa} />
                <TextInput style={styles.search} placeholder="Buscar servicios"></TextInput>
            </View>
        </View>
    );
}

//////////////////////////////
const SERVICES = [
    { id: "1", nombre: "Mecanico", icono: "🔧" },
    { id: "2", nombre: "Electricista", icono: "⚡" },
    { id: "3", nombre: "Jardinero", icono: "🌿" },
    { id: "4", nombre: "Gasfitero", icono: "🚿" },
];

function ServiceCategory({ styles }) {
    return (
        <View style={styles.services}>
            <Text style={styles.titleService}>Servicios</Text>
            <View style={styles.serviceContainer}>
                {SERVICES.map((servis) => {
                    return (
                        <View style={styles.serviceItem} key={servis.id}>
                            <Text style={styles.iconService}>{servis.icono}</Text>
                            <Text style={styles.serviceName}>{servis.nombre}</Text>
                        </View>
                    )
                })}</View>
        </View>
    );
}

function Service({ service, styles }) {
    return (
        <View style={styles.serviceItem} key={service.id}>
            <Text>{service.icono}</Text>
            <Text>{service.nombre}</Text>
        </View>
    );
}
//////////////////////////////


function HomeCustomer() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);

    return (
        <View style={{ backgroundColor: colors.primary }}>
            <UserLogged styles={styles}></UserLogged>
            <View style={styles.body}>
                <ServiceCategory styles={styles}></ServiceCategory>
            </View>
        </View>
    );
};


export default HomeCustomer;
