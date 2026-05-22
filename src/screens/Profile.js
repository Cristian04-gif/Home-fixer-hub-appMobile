import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

import { logout } from '../storage/AuthStorage'
export default function Profile() {
    const navigation = useNavigation();
    const cerrarSesion = async () => {
        await logout();
        navigation.navigate("Welcome");
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable onPress={cerrarSesion}>
                <Text>Cerrar sesion</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({})