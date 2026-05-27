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
import TechnicianProfileForClient from './src/components/TechnicianProfileForClient';
import './src/api/Interceptors'
import { getToken, getRole, getUser } from './src/storage/AuthStorage';
import TechniciansForServices from './src/components/TechniciansForServices';
import NewSkillTechnical from './src/components/NewSkillTechnical';

function CustomerNavigator() {
    return (
        <CustomerStack.Navigator>
            {/* Primero el Tab Navigator como base */}
            <CustomerStack.Screen name="MainTabs" component={Home} options={{ headerShown: false }} />
            
            {/* Las pantallas a las que deseas navegar encima de las pestañas */}
            <CustomerStack.Screen name="TechnicalForService" component={TechniciansForServices} options={{
                title: 'Lista de Tecnicos',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }} />
            
            <CustomerStack.Screen name="TechnicianProfileForClient" component={TechnicianProfileForClient} options={{
                title: 'Perfil de Técnico',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }} />
        </CustomerStack.Navigator>
    );
}


const Stack = createNativeStackNavigator();
function RootStack() {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const token = await getToken();
        const data = await getUser();
        if (token && data) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    };

    if (loading) {
        return null;
    }

    return (
        <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Welcome"}>
            {/* --- FLUJO DE AUTENTICACIÓN --- */}
            <Stack.Screen name="Welcome" component={Bienvenida} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{
                title: 'Inicio de Sesión',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }} />
            <Stack.Screen name="Register" component={Registro} options={{
                title: 'Registro',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }} />

            {/* --- PANTALLA PRINCIPAL --- */}
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            {/* --- PANTALLAS DEL CLIENTE --- */}
            <Stack.Screen name="TechnicalForService" component={TechniciansForServices} options={{
                title: 'Lista de Tecnicos',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }} />
            <Stack.Screen name="TechnicianProfileForClient" component={TechnicianProfileForClient} options={{
                title: 'Perfil de Técnico',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }} />

            {/* --- PANTALLAS DEL TÉCNICO --- */}
            <Stack.Screen name='NewSkillTechnical' component={NewSkillTechnical} options={{
                title: 'Nueva Profesión',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }} />
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