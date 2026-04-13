import { StyleSheet, Text, View, Animated, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import colors from '../styles/const/colors';
import fonts from '../styles/const/fonts';
const SwitchTypeUser = ({ onTypeChange, initialType }) => {
    const [userType, setUserType] = useState('');
    const animValue = useRef(new Animated.Value(0)).current;

    const moverSwitch = (tipo) => {
        setUserType(tipo);
        onTypeChange(tipo);

        // 2. Ejecutamos la animación hacia el nuevo valor
        Animated.timing(animValue, {
            toValue: tipo === 'cliente' ? 0 : 1,
            duration: 250, // Duración de la transición
            useNativeDriver: true, // Para que sea ultra fluido
        }).start();
    };



    // 3. Mapeamos el valor 0-1 a la distancia en píxeles
    const deslizamiento = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 210], // Ajusta estos números según el ancho de tu switch
    });
    return (
        <View style={styles.switch}>
            <Animated.View style={[
                styles.activeIndicator,
                { transform: [{ translateX: deslizamiento }] }
            ]} />
            <Pressable style={styles.btn} onPress={() => moverSwitch('cliente')}>
                <Text style={[styles.txt, userType === 'cliente' && styles.txtActive]}>CLIENTE</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => moverSwitch('tecnico')}>
                <Text style={[styles.txt, userType === 'tecnico' && styles.txtActive]}>TÉCNICO</Text>
            </Pressable>
        </View>
    )
}

export default SwitchTypeUser

const styles = StyleSheet.create({
    switch: {
        marginTop: 10,
        flexDirection: 'row',
        width: '90%',
        height: 60,
        backgroundColor: '#E5E7E9',
        borderRadius: 50,
        position: 'relative',
    },
    activeIndicator: {
        position: 'absolute',
        top: 0,
        left: -2,
        width: '50%',
        height: '100%',
        backgroundColor: colors.primary,
        borderRadius: 50,
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontWeight: '600',
        color: '#000',
        fontSize: fonts.default,
    },
    txtActive: {
        color: '#FFF'
    },
})