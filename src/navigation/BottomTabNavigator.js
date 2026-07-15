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
            setRole(rol);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        typeRole();
    }, [])
    return (
        <>
            {role === 'CLIENTE' && <CustomerNavigator />}
            {role === "TECNICO" && <TechnicalNavigator />}
        </>
    )
}

