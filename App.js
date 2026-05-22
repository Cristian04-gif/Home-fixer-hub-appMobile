import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import colors from './src/utils/colors';
import Login from './src/screens/Login';
import Bienvenida from './src/screens/Bienvenida';
import Registro from './src/screens/Registro';
import Home from './src/screens/Home';
import TechnicianProfile from './src/components/TechnicianProfile';
import './src/api/Interceptors'
import { getToken, getRole } from './src/storage/AuthStorage';
import TechniciansForServices from './src/components/TechniciansForServices';
const Stack = createNativeStackNavigator();

function RootStack() {

    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, [])

    const checkAuth = async () => {

        const token = await getToken();
        if (token) {
            setIsAuthenticated(true);
        }

        setLoading(false);
    };

    if (loading) {
        return null;
    }


    return !isAuthenticated ? (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name="Welcome" component={Bienvenida} options={{ headerShown: false }}></Stack.Screen>

            <Stack.Screen name="Login" component={Login} options={{
                title: 'Inicio de Sesión',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTitleStyle: {
                    fontSize: 25
                },
            }}></Stack.Screen>

            <Stack.Screen name="Register" component={Registro} options={{
                title: 'Registro',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    fontSize: 25
                },
            }}></Stack.Screen>

            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    ) : (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="TechnicalForService" component={TechniciansForServices} options={{
                title: 'Lista de Tecnicos',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    fontSize: 25
                },
            }}></Stack.Screen>
            <Stack.Screen name="TechnicianProfile" component={TechnicianProfile} options={{
                title: 'Perfil de Técnico',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    fontSize: 25
                },
            }}></Stack.Screen>
            <Stack.Screen name="Welcome" component={Bienvenida} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack></RootStack>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
    },
});