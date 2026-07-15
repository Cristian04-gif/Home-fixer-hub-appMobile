
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestsCustomer from '../../screen/client/request/RequestsCustomer';
import RecuestDetail from '../../screen/client/request/RecuestDetail';
import colors from '../../utils/colors';
const Stack = createNativeStackNavigator();
export default function RequestStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='RequestsCustomer' component={RequestsCustomer} options={{
                title: "Mis Consultas", headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }}></Stack.Screen>
            <Stack.Screen name='RecuestDetail' component={RecuestDetail} options={{
                title: "Detalle de Solicitud", headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }}></Stack.Screen>
        </Stack.Navigator>
    )
}
