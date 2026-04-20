import { Text, View, Pressable, TextInput, Image } from 'react-native'
import React, { useState, useRef } from 'react';
import { useNavigation } from "@react-navigation/native";
// simbolos
import Entypo from '@expo/vector-icons/Entypo';
// components
import SwitchTypeUser from '../components/SwitchTypeUser';
// styles
import { useResponsive } from "../utils/useResponsive";
import { createStyles } from '../styles/LoginStyle';
import colors from '../utils/colors';

const REDES_LOGIN = [
    { name: 'Google', icon: require('../../assets/logo-google.png') },
    { name: 'Facebook', icon: require('../../assets/logo-facebook.png') },
    { name: 'Apple', icon: require('../../assets/apple-logo.png') }
]

const Login = () => {
    const navigation = useNavigation();

    const [typeUser, setTypeUser] = useState('cliente');
    const [passwordVisible, setPasswordVisible] = useState(false)
    const passwordRef = useRef(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fomrComplet = email.length > 0 && password.length > 0;

    const verContraseña = () => {
        setPasswordVisible(!passwordVisible);
        if (passwordRef.current) {
            passwordRef.current.setNativeProps({
                secureTextEntry: passwordVisible
            })
        }

    }

    const responsive = useResponsive();
    const styles = createStyles(responsive);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <SwitchTypeUser style={styles.switch} initialType={typeUser} onTypeChange={(tipo) => setTypeUser(tipo)}></SwitchTypeUser>

                <View style={styles.form}>
                    <View style={{ gap: 10 * responsive.scale }}>
                        <Text style={styles.textForm}>Correo Electronico</Text>
                        <TextInput style={styles.input} inputMode='email' placeholder='Correo' value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={{ gap: 10 * responsive.scale }}>
                        <Text style={styles.textForm}>Contraseña</Text>
                        <View style={styles.password}>
                            <TextInput ref={passwordRef} style={styles.input} secureTextEntry={true} placeholder='Contraseña' value={password} onChangeText={setPassword}></TextInput>
                            <Pressable onPress={() => verContraseña()} style={styles.eyeButton}>
                                {passwordVisible && <Entypo name="eye-with-line" size={24} color="black" /> || <Entypo name="eye" size={24} color="black" />}
                            </Pressable>
                        </View>
                    </View>

                </View>

                <View style={styles.redesLogin}>
                    <Text style={{ fontSize: responsive.font(22) }}>O iniciar sesión con:</Text>
                    <View style={styles.redes}>
                        {REDES_LOGIN.map((item) => {
                            return (
                                <Pressable key={item.name} style={styles.botonRedSocial}>
                                    <Image source={item.icon} style={styles.redesIcon}></Image>
                                </Pressable>
                            )
                        })}
                    </View>
                    <Text style={{ fontSize: responsive.font(22), color: colors.primary, marginTop: 20 * responsive.scale }}>¿Olvidaste tu contraseña?</Text>
                </View>

                <View style={styles.logs}>
                    <Pressable  onPress={() => navigation.navigate('Home')} disabled={!fomrComplet} style={[styles.btnLogin, !fomrComplet && { backgroundColor: '#ccc' }]}>
                        <Text style={{ textAlign: 'center', color: colors.background, fontSize: responsive.font(22) }}>INICIAR SESIÓN</Text>
                    </Pressable>
                    <View style={styles.register}>
                        <Text style={{ fontSize: responsive.font(22) }}>¿No tienes cuenta?</Text>
                        <Pressable onPress={() => navigation.navigate('Register')}><Text style={{ fontSize: responsive.font(22), color: colors.primary }}>Registrate</Text></Pressable>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Login

