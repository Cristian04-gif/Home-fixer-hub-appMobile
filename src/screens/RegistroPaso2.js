import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { use, useState } from 'react'
import Checkbox from 'expo-checkbox';
import colors from '../styles/colors';
const RegistroPaso2 = ({ onValid, data, typeUser }) => {
    const [isChecked, setChecked] = useState(false);
    const [password, setPassword] = useState(data.password || '');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.body}>

                <View style={styles.section}>
                    <Text>Crear contraseña</Text>
                    <TextInput placeholder='Crear contraseña'></TextInput>
                </View>

                <View style={styles.section}>
                    <Text>Confirmar contraseña</Text>
                    <TextInput placeholder='Confirmar contraseña'></TextInput>
                </View>
                
                {typeUser === 'tecnico' && <View style={styles.section}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? colors.success : undefined} // El azul de tu app
                        />
                        <Text style={{ fontSize: 25 }}>Soy un tecnico profecional (validacion requerida)</Text>
                    </View>
                </View>}
            </View>
        </View>
    )
}

export default RegistroPaso2

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        //justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    section: {
        width: '90%',
        padding: 20,
        gap: 5,
    },
})