import { Text, View, Image, ScrollView, TouchableHighlight, useWindowDimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

import { useResponsive } from "../utils/useResponsive";
import { createStyles } from '../styles/BienvenidaStyle';
const Panel = () => {
    const navigation = useNavigation();

    const responsive = useResponsive();
    const styles = createStyles(responsive);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Bienvenida</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/img/logo-Home-Fixer_Hub.png')}></Image>
                    <Text style={styles.name}>Home Fixer Hub</Text>
                </View>
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../../assets/img/img-bienvenida.png')}></Image>
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


