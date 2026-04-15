import { Text, View, Animated, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'


import { useResponsive } from "../utils/useResponsive";
import { createStyles } from '../styles/SwitchTypeUserStyles';
const SwitchTypeUser = ({ onTypeChange, initialType }) => {
    const [userType, setUserType] = useState('');
    const animValue = useRef(new Animated.Value(0)).current;

    const moverSwitch = (tipo) => {
        setUserType(tipo);
        onTypeChange(tipo);

        Animated.timing(animValue, {
            toValue: tipo === 'cliente' ? 0 : 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const responsive = useResponsive();
    const styles = createStyles(responsive);

    const deslizamiento = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 170 * responsive.scale],
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

