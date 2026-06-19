import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../utils/colors'
import HomeStack from './stackCustomer/HomeStack'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function CustomerNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
    }}>
      <Tab.Screen name='HomeClient' component={HomeStack} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}></Tab.Screen>

    </Tab.Navigator>
  )
}

