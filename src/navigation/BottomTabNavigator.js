import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomerNavigator from './CustomerNavigator';
import TechnicalNavigator from './TechnicalNavigator';
import { getRole } from '../storage/AuthStorage';
export default function BottomTabNavigator() {
    const [role, setRole] = useState('');

    const typeRole = async () => {
        try {
            const rol = await getRole();
            console.log("rol de usuario: ", rol)
            setRole(rol);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        typeRole();
    }, [])
    console.log("rol: ", role)
    return (
        <>
            {role === "CLIENTE" ? <CustomerNavigator /> : <TechnicalNavigator />}
        </>
    )
}

