
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestsCustomer from '../../screen/client/request/RequestsCustomer';
import RecuestDetail from '../../screen/client/request/RecuestDetail';

const Stack = createNativeStackNavigator();
export default function RequestStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='RequestsCustomer' component={RequestsCustomer} options={{title: "Mis Consultas"}}></Stack.Screen>
            <Stack.Screen name='RecuestDetail' component={RecuestDetail} options={{title: "Detalle de Solicitud"}}></Stack.Screen>
        </Stack.Navigator>
    )
}
