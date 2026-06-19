
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardClient from '../../screen/client/home/DashboardClient';
import ServiceCatalog from '../../screen/client/home/ServiceCatalog';
import TechniciansAvailable from '../../screen/client/home/TechniciansAvailable';
import TechnicianDetails from '../../screen/client/home/TechnicianDetails';
import RequestService from '../../screen/client/home/RequestService';
const Stack = createNativeStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={DashboardClient} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='ServiceCatalog' component={ServiceCatalog} options={{ title: "Servicios" }}></Stack.Screen>
            <Stack.Screen name='TechniciansAvailable' component={TechniciansAvailable} options={{ title: "Tecnicos Disponibles" }}></Stack.Screen>
            <Stack.Screen name='TechnicianDetails' component={TechnicianDetails} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='RequestService' component={RequestService} options={{ title: 'Solicitar servicio' }}></Stack.Screen>
        </Stack.Navigator>
    )
}

