import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import MyJobs from "../../screen/technician/jobs/MyJobs";
import DetailsMyJob from "../../screen/technician/jobs/DetailsMyJob";
import colors from "../../utils/colors";
export default function JobsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MyJobs"
                component={MyJobs}
                options={{
                    title: "Mis trabajos",
                    headerTintColor: "#fff",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: colors.primary },
                    headerTitleStyle: { fontSize: 25 },
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="DetailsMyJob"
                component={DetailsMyJob}
                options={{
                    title: "Tabajo en proceso",
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.primary },
                    headerTitleStyle: { fontSize: 25 },
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}
