import { StyleSheet, Text, View, Pressable, Animated, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import colors from '../styles/colors';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import SwitchTypeUser from './SwitchTypeUser';
const REDES_LOGIN = [
    { name: 'Google', icon: require('../../assets/logo-google.png') },
    { name: 'Facebook', icon: require('../../assets/logo-facebook.png') },
    { name: 'Apple', icon: require('../../assets/apple-logo.png') }
]

const Login = () => {
    const navigation = useNavigation();
    //const [userType, setUserType] = useState('cliente');
    const [passwordVisible, setPasswordVisible] = useState(false)
    const passwordRef = useRef(null);
    // 1. Creamos la variable animada (0 = izquierda, 1 = derecha)
    const animValue = useRef(new Animated.Value(0)).current;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fomrComplet = email.length > 0 && password.length > 0;

    /*const moverSwitch = (tipo) => {
        setUserType(tipo);
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
    });*/

    const verContraseña = () => {
        setPasswordVisible(!passwordVisible);
        if (passwordRef.current) {
            passwordRef.current.setNativeProps({
                secureTextEntry: passwordVisible
            })
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <SwitchTypeUser></SwitchTypeUser>

                <View style={styles.form}>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.textForm}>Correo Electronico</Text>
                        <TextInput style={styles.input} inputMode='email' placeholder='Correo' value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.textForm}>Contraseña</Text>
                        <View style={styles.password}>
                            <TextInput ref={passwordRef} style={styles.input} secureTextEntry={true} placeholder='Contraseña' value={password} onChangeText={setPassword}></TextInput>
                            <TouchableOpacity onPress={() => verContraseña()} style={styles.eyeButton}>
                                <Entypo name="eye-with-line" size={25} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.redesLogin}>
                    <Text style={{ fontSize: 25 }}>O iniciar sesión con:</Text>
                    <View style={styles.redes}>
                        {REDES_LOGIN.map((item) => {
                            return (
                                <Pressable key={item.name} style={styles.botonRedSocial}>
                                    <Image source={item.icon} style={styles.redesIcon}></Image>
                                </Pressable>
                            )
                        })}
                    </View>
                    <Text style={{ fontSize: 25, color: colors.primary, marginTop: 30 }}>¿Olvidaste tu contraseña?</Text>
                </View>

                <View style={styles.logs}>
                    <Pressable disabled={fomrComplet} style={[styles.btnLogin, !fomrComplet && { backgroundColor: '#ccc' }]}>
                        <Text style={{ textAlign: 'center', color: colors.background, fontSize: 25 }}>INICIAR SESIÓN</Text>
                    </Pressable>
                    <View style={styles.register}>
                        <Text style={{ fontSize: 25 }}>¿No tienes cuenta?</Text>
                        <Pressable onPress={() => navigation.navigate('Register')}><Text style={{ fontSize: 25, color: colors.primary }}>Registrate</Text></Pressable>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    }, body: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        //justifyContent: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    //switch

    //form
    form: {
        width: '90%',
        gap: 20,
        margin: 40,
        marginTop: 50
    },
    textForm: {
        fontSize: 25,
        fontWeight: '700'
    },
    input: {
        width: '100%',
        borderWidth: 1,
        height: 60,
        borderRadius: 10,
        fontSize: 25
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eyeButton: {
        position: 'absolute',
        right: 15
    },

    //login redes
    redesLogin: {
        width: '90%',
        alignItems: 'center',
        padding: 20
    },
    redes: {
        marginTop: 30,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 30
    },
    botonRedSocial: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.cardBg
    },
    redesIcon: {
        width: 60,
        height: 60
    },

    //logs
    logs: {
        width: '90%',
        alignItems: 'center',
        padding: 20,
        marginTop: 30
    },
    btnLogin: {
        backgroundColor: colors.primary,
        width: '100%',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center'
    },
    register: {
        marginTop: 20,
        flexDirection: 'row',
        padding: 20,
        gap: 5,

    }
})