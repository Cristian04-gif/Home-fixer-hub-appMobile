import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import colors from './src/utils/colors';
import Login from './src/screens/Login';
import Bienvenida from './src/screens/Bienvenida';
import Registro from './src/screens/Registro';
import Home from './src/screens/Home';
const RootStack = createNativeStackNavigator({
    screens: {
        Welcome: {
            screen: Bienvenida, 
            options: {
                headerShown: false
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
                },
                headerTitleStyle:{
                    fontSize: 25
                },
            }
        },
        Register:{
            screen: Registro,
            options:{
                title: 'Registro',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle:{
                    backgroundColor: colors.primary,
                },
                headerTitleStyle:{
                    fontSize: 25
                },
            }
        },
        Home: {
            screen: Home,
        }
    },
});
const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
    },
});

const Navigation = createStaticNavigation(RootStack);



export default function App() {
    return <Navigation />;
}