import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Applications from '../../screen/technician/request/Applications';
import ApplicationDetails from '../../screen/technician/request/ApplicationDetails'
import colors from '../../utils/colors';

const Stack = createNativeStackNavigator();
export default function RequestStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Applications' component={Applications} options={{
                title: 'Solicitudes pendientes',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }}></Stack.Screen>
            <Stack.Screen name='ApplicationDetails' component={ApplicationDetails} options={{
                title: "Detalles de la Solicitud",
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }}></Stack.Screen>
        </Stack.Navigator>
    )
}

