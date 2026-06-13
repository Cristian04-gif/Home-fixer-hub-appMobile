import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Applications from '../../screen/technician/request/Applications';
import ApplicationDetails from '../../screen/technician/request/ApplicationDetails'


const Stack = createNativeStackNavigator();
export default function RequestStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Applications' component={Applications} options={{ title: 'Solicitudes pendientes' }}></Stack.Screen>
            <Stack.Screen name='ApplicationDetails' component={ApplicationDetails} options={{ title: "Detalles de la Solicitud" }}></Stack.Screen>
        </Stack.Navigator>
    )
}

