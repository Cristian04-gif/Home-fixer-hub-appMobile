import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, useWindowDimensions } from "react-native";
import React from "react";
import styles from "../styles/BienvenidaStyle";
import { useNavigation } from "@react-navigation/native";

const Panel = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Bienvenida</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/favicon.png')}></Image>
                    <Text style={styles.name}>Home Fixer Hub</Text>
                </View>
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../../assets/img-bienvenida.png')}></Image>
                    <Text style={styles.description}>Encuentra técnicos confiables cerca de ti</Text>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>COMENZAR</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};

const Bienvenida = () => {


    const { width, height } = useWindowDimensions();

    const isHorizontal = width > height;
    return (
        <>
            {!isHorizontal && <Panel></Panel> || <ScrollView><Panel></Panel></ScrollView>}
        </>
    );
};

export default Bienvenida;


