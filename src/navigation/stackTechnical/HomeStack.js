import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../screen/technician/home/Dashboard'
import MyServices from '../../screen/technician/home/MyServices'
import DetailsMyService from '../../screen/technician/home/DetailsMyService'
import NewService from '../../screen/technician/home/NewService'
import Applications from '../../screen/technician/request/Applications';
import MyJobs from '../../screen/technician/jobs/MyJobs';
const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='MyServices' component={MyServices} options={{ title: "Mis servicios" }}></Stack.Screen>
      <Stack.Screen name='DetailsMyService' component={DetailsMyService} options={{ title: "Detalle de mi servicio" }}></Stack.Screen>
      <Stack.Screen name='NewService' component={NewService} options={{ title: "Agregar servicio" }}></Stack.Screen>
      <Stack.Screen name='Applications' component={Applications} options={{title:'Solicitudes pendientes'}}></Stack.Screen>
      <Stack.Screen name='MyJobs' component={MyJobs} options={{title: "Mis trabajos"}}></Stack.Screen>
    </Stack.Navigator>
  )
}
