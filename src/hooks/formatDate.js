import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const formatDate = (datetime) => {
    const fecha = new Date(datetime);
    const fechaFormateada = fecha.toLocaleDateString('es-PE', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })
    const horaFormateada = fecha.toLocaleTimeString('es-Pe', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
    return { fechaFormateada, horaFormateada }
}

