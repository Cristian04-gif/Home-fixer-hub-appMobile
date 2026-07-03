
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileCustomer from '../../screen/client/profile/ProfileCustomer';
const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='ProfileCustomer' component={ProfileCustomer} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

