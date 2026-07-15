
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardClient from '../../screen/client/home/DashboardClient';
import ServiceCatalog from '../../screen/client/home/ServiceCatalog';
import TechniciansAvailable from '../../screen/client/home/TechniciansAvailable';
import TechnicianDetails from '../../screen/client/home/TechnicianDetails';
import RequestService from '../../screen/client/home/RequestService';
import colors from '../../utils/colors';
const Stack = createNativeStackNavigator();
export default function HomeStackCustomer() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='DashboardClient' component={DashboardClient} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='ServiceCatalog' component={ServiceCatalog} options={{
                title: "Servicios", headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }}></Stack.Screen>
            <Stack.Screen name='TechniciansAvailable' component={TechniciansAvailable} options={{
                title: "Tecnicos Disponibles",
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }}></Stack.Screen>
            <Stack.Screen name='TechnicianDetails' component={TechnicianDetails} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='RequestService' component={RequestService} options={{
                title: 'Solicitar servicio',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { fontSize: 25 },
            }}></Stack.Screen>
        </Stack.Navigator>
    )
}

