import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../utils/colors'
import HomeStack from './stackTechnical/HomeStack'
import RequestStack from './stackTechnical/RequestStack';
import ProfileStack from './stackTechnical/ProfileStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const Tab = createBottomTabNavigator();
export default function TechnicalNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textSecondary,
        }}>
            <Tab.Screen name='Home' component={HomeStack} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }}></Tab.Screen>
            <Tab.Screen name='Request' component={RequestStack} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="clipboard-clock" size={size} color={color} />
                ),
            }}></Tab.Screen>
            <Tab.Screen name='Profile' component={ProfileStack} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome6 name="user-large" size={size} color={color} />
                ),
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}

