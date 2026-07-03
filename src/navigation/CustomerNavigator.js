import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../utils/colors'
import HomeStack from './stackCustomer/HomeStack';
import RequestStack from './stackCustomer/RequestStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileStack from './stackCustomer/ProfileStack';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
      <Tab.Screen name='RequestStack' component={RequestStack} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="profile" size={size} color={color} />
        ),
      }}></Tab.Screen>
      <Tab.Screen name='ProfileStack' component={ProfileStack} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="user-large" size={size} color={color} />
        ),
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}

