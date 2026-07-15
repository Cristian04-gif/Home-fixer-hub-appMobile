import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Bienvenida from '../screen/auth/Bienvenida';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import colors from '../utils/colors';
const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Bienvenida} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{
                    title: 'Inicio de Sesión',
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: colors.primary },
                    headerTitleStyle: { fontSize: 25 },
                }} />
                <Stack.Screen name="Register" component={Register} options={{
                    title: 'Registro',
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                    headerTitleStyle: { fontSize: 25 },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

