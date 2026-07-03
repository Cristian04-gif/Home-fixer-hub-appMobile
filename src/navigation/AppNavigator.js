import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getToken } from '../storage/AuthStorage';
import AuthNavigator from '../navigation/AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

export default function AppNavigator() {

  return (

    <BottomTabNavigator />

  )
}
