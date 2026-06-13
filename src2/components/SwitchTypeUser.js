import { Text, View, Animated, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'


import { useResponsive } from "../hooks/useResponsive";
import { createStyles } from '../styles/SwitchTypeUser.style';
const SwitchTypeUser = ({ onTypeChange, initialType }) => {
    const [userType, setUserType] = useState('');
    const animValue = useRef(new Animated.Value(0)).current;

    const moverSwitch = (tipo) => {
        setUserType(tipo);
        onTypeChange(tipo);

        Animated.timing(animValue, {
            toValue: tipo === 'CLIENTE' ? 0 : 1,
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
            <Pressable style={styles.btn} onPress={() => moverSwitch('CLIENTE')}>
                <Text style={[styles.txt, userType === 'CLIENTE' && styles.txtActive]}>CLIENTE</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => moverSwitch('TECNICO')}>
                <Text style={[styles.txt, userType === 'TECNICO' && styles.txtActive]}>TÉCNICO</Text>
            </Pressable>
        </View>
    )
}

export default SwitchTypeUser

