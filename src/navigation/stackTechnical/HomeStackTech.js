import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardTechnical from '../../screen/technician/home/DashboardTechnical'
import MyServices from '../../screen/technician/home/MyServices'
import DetailsMyService from '../../screen/technician/home/DetailsMyService'
import NewService from '../../screen/technician/home/NewService'
import Applications from '../../screen/technician/request/Applications';
import MyJobs from '../../screen/technician/jobs/MyJobs';
import colors from '../../utils/colors';
const Stack = createNativeStackNavigator();
export default function HomeStackTech() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='DashboardTechnical' component={DashboardTechnical} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='MyServices' component={MyServices} options={{
        title: "Mis servicios", headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { fontSize: 25 },
      }}></Stack.Screen>
      <Stack.Screen name='DetailsMyService' component={DetailsMyService} options={{
        title: "Detalle de mi servicio", headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { fontSize: 25 },
      }}></Stack.Screen>
      <Stack.Screen name='NewService' component={NewService} options={{
        title: "Agregar servicio", headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { fontSize: 25 },
      }}></Stack.Screen>
      <Stack.Screen name='Applications' component={Applications} options={{
        title: 'Solicitudes pendientes', headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { fontSize: 25 },
      }}></Stack.Screen>
      <Stack.Screen name='MyJobs' component={MyJobs} options={{
        title: "Mis trabajos", headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { fontSize: 25 },
      }}></Stack.Screen>
    </Stack.Navigator>
  )
}
