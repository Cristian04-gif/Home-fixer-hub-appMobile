import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfile from '../../screen/technician/profile/MyProfile'
import MyServices from '../../screen/technician/home/MyServices'
import DetailsMyService from '../../screen/technician/home/DetailsMyService'
import NewService from '../../screen/technician/home/NewService'

const Stack = createNativeStackNavigator();
export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={MyProfile} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='MyServices' component={MyServices} options={{ title: "Mis servicios" }}></Stack.Screen>
            <Stack.Screen name='DetailsMyService' component={DetailsMyService} options={{ title: "Detalle de mi servicio" }}></Stack.Screen>
            <Stack.Screen name='NewService' component={NewService} options={{ title: "Agregar servicio" }}></Stack.Screen>
        </Stack.Navigator>
    )
}
