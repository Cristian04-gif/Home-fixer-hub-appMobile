import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

import colors from '../utils/colors'
import HomeStackCustomer from './stackCustomer/HomeStackCustomer';
import RequestStack from './stackCustomer/RequestStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileStack from './stackCustomer/ProfileStack';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import RateService from '../screen/client/home/RateService';

export const navigationRef = createNavigationContainerRef();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
    }}>
      <Tab.Screen name='HomeClient' component={HomeStackCustomer} options={{
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

export default function CustomerNavigator() {
  useEffect(() => {
    const responseListener = Notifications.addNotificationResponseReceivedListener(res => {
      const { screen, bookingId, technicalId } = res.notification.request.content.data;
      if (navigationRef.isReady() && screen === 'RateService') {
        navigationRef.navigate('RateService', { bookingId: bookingId, technicalId: technicalId })
      }
    })
    return () => {
      if (responseListener) {
        responseListener.remove();
      }
    };
  }, [])
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name='MainTabs' component={TabNavigator} options={{ headerShown: false }}></RootStack.Screen>
        <RootStack.Screen name='RateService' component={RateService} options={{ headerShown: false }}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

