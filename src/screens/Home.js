import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStyles } from '../styles/HomeCustomerStyle';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useResponsive } from "../utils/useResponsive";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import HomeCustomer from '../components/HomeCustomer';
import Profile from './Profile';
import Notifications from './Notifications';
import colors from '../utils/colors';

import { getRole } from '../storage/AuthStorage';

const Tab = createBottomTabNavigator();
function CustomerNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
    }}>
      <Tab.Screen name="HomeCustomer" component={HomeCustomer} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="house" size={size} color={color} />
        ),
      }}></Tab.Screen>
      <Tab.Screen name="Notifications" component={Notifications} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="bell" size={size} color={color} />
        ),
      }}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={size} color={color} />
        ),
      }}></Tab.Screen>
    </Tab.Navigator>
  );
}


const Home = () => {
  const [role, setRole] = useState('');

  useEffect(() => {

    const loadRole = async () => {

      const rol = await getRole();
      setRole(rol)
      console.log(rol);
    };

    loadRole();

  }, []);
  return (
    <View style={{ flex: 1 }}>
      {role === "cliente" ? <CustomerNavigation></CustomerNavigation> : <Text>Tecnico</Text>}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})