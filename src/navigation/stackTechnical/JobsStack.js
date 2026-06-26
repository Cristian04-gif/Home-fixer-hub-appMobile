import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MyJobs from '../../screen/technician/jobs/MyJobs';
import DetailsMyJob from '../../screen/technician/jobs/DetailsMyJob';
export default function JobsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MyJobs' component={MyJobs} options={{title: "Mis trabajos"}}></Stack.Screen>
            <Stack.Screen name='DetailsMyJob' component={DetailsMyJob} options={{title: 'Tabajo en proceso'}}></Stack.Screen>
        </Stack.Navigator>
    )
}
