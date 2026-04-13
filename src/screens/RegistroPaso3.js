import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../styles/RegistroPaso3Style';

const RegistroPaso3 = ({ onValid, data }) => {
    const [visitFee, setVisitFee] = useState(data.visitFee || 0.0);

    useEffect(() => {
        const esValido = visitFee > 0;
        onValid(esValido, { visitFee })
    }, [visitFee])

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.section}>
                    <Text style={styles.label}>Tarifa de visita</Text>
                    <TextInput style={styles.input} inputMode='numeric' value={visitFee} onChangeText={setVisitFee} placeholder='Tarifa de Visita'></TextInput>
                </View>
            </View>
        </View>
    )
}

export default RegistroPaso3
