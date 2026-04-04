import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import colors from './src/styles/colors';
import Login from './src/screens/Login';
import Bienvenida from './src/screens/Bienvenida';
import Registro from './src/screens/Registro';
const RootStack = createNativeStackNavigator({
    screens: {
        Welcome: {
            screen: Bienvenida, //nombre del componente
            options: {
                headerShown: false // Ocultamos la barra oficial
            }
        },
        Login: {
            screen: Login,
            options: {
                title: 'Inicio de Sesión',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: colors.primary

                }
            }
        },
        Register:{
            screen: Registro
        }
    },
});
const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary, // El color de tu paleta
    },
});

const Navigation = createStaticNavigation(RootStack);



export default function App() {
    return <Navigation />;
}