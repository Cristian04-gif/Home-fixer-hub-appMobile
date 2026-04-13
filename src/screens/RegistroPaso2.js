import { Text, View, TextInput, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Checkbox from 'expo-checkbox';
import Entypo from '@expo/vector-icons/Entypo';
//styles
import styles from '../styles/RegistroPaso2Style';
import colors from '../styles/const/colors';

const RegistroPaso2 = ({ onValid, data, typeUser }) => {
    const [isChecked, setChecked] = useState(false);

    const [dni, setDni] = useState(data.dni || '')
    const [password, setPassword] = useState(data.password || '');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPassowrdEqueal, setIsPassowrdEqueal] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [passwordConditions, setPasswordConditions] = useState({ longitud: false, mayus: false, minus: false, num: false, simbol: false })

    const verContraseña = () => {
        setPasswordVisible(!passwordVisible);

        if (passwordRef.current && confirmPasswordRef.current) {
            passwordRef.current.setNativeProps({
                secureTextEntry: passwordVisible
            })
            confirmPasswordRef.current.setNativeProps({
                secureTextEntry: passwordVisible
            })
        }

    }

    const verificarContrasena = (contrasena) => {
        // 1. Calculamos los nuevos valores basándonos en TODA la cadena
        const nuevasCondiciones = {
            longitud: contrasena.length >= 12 && contrasena.length <= 14,
            mayus: /[A-Z]/.test(contrasena),
            minus: /[a-z]/.test(contrasena),
            num: /\d/.test(contrasena),
            simbol: /[^a-zA-Z0-9\s]/.test(contrasena)
        };

        // 2. Actualizamos el estado de un solo golpe
        setPasswordConditions(nuevasCondiciones);
        console.log("condiciones: " +nuevasCondiciones);
        return Object.values(nuevasCondiciones).every(valor => valor === true);
    };



    useEffect(() => {
        if (typeUser === 'cliente') {
            const esvalido = verificarContrasena(password) && (password === confirmPassword) && (dni.length === 8);
            setIsPassowrdEqueal(password === confirmPassword);
            onValid(esvalido, { password, dni });
        } else {
            const esvalido = verificarContrasena(password) && (password === confirmPassword) && isChecked && (dni.length === 8);
            setIsPassowrdEqueal(password === confirmPassword);
            onValid(esvalido, { password, dni })
        }

    }, [dni, password, confirmPassword, isChecked])

    return (
        <View style={styles.container}>
            <View style={styles.body}>

                <View style={styles.section}>
                    <Text style={styles.label}>DNI</Text>
                    <TextInput style={styles.input} inputMode='numeric' value={dni} onChangeText={setDni} placeholder='DNI'></TextInput>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Crear contraseña</Text>
                    <TextInput ref={passwordRef} secureTextEntry={true} style={styles.input} placeholder='Crear contraseña' value={password} onChangeText={setPassword}></TextInput>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Confirmar contraseña</Text>
                    <View style={styles.password}>
                        <TextInput ref={confirmPasswordRef} style={styles.input} secureTextEntry={true} placeholder='Confirmar contraseña' value={confirmPassword} onChangeText={(setConfirmPassword)}></TextInput>
                        <Pressable onPress={() => verContraseña()} style={styles.eyeButton}>
                            {passwordVisible && <Entypo name="eye-with-line" size={24} color="black" /> || <Entypo name="eye" size={24} color="black" />}
                        </Pressable>
                    </View>
                    {!isPassowrdEqueal && <Text style={[!isPassowrdEqueal && { color: '#f00' }]}>No coincide con la contraseña ingresada</Text>}
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

                <View style={styles.section}>
                    <Text style={styles.subtitleConditions}>Requisitos de contraseña:</Text>
                    <View >
                        <Text style={[styles.conditions, passwordConditions.longitud && styles.conditionFulfilled]}> - Longitud de 12 a 14 caracteres</Text>
                        <Text style={[styles.conditions, passwordConditions.mayus && styles.conditionFulfilled]}> - Uso de mayusculas </Text>
                        <Text style={[styles.conditions, passwordConditions.minus && styles.conditionFulfilled]}> - Uso de minusculas</Text>
                        <Text style={[styles.conditions, passwordConditions.num && styles.conditionFulfilled]}> - Uso de numeros</Text>
                        <Text style={[styles.conditions, passwordConditions.simbol && styles.conditionFulfilled]}> - Uso de simbolos</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default RegistroPaso2

