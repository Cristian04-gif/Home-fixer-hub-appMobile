import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import colors from '../utils/colors'
import HomeStackTech from './stackTechnical/HomeStackTech'
import RequestStack from './stackTechnical/RequestStack';
import JobsStack from './stackTechnical/JobsStack';
import ProfileStack from './stackTechnical/ProfileStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
export default function TechnicalNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textSecondary,
        }}>
            <Tab.Screen name='HomeTech' component={HomeStackTech} options={{
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
            <Tab.Screen name='Jobs' component={JobsStack} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="shipping-fast" size={size} color={color} />
                ),
            }}></Tab.Screen>
            <Tab.Screen name='Profile' component={ProfileStack} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome6 name="user-large" size={size} color={color} />
                ),
            }}></Tab.Screen>

        </Tab.Navigator>
        </NavigationContainer>

    )
}

