import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';



import './src/api/Interceptors'
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';
export default function App() {
    return (
        <AuthProvider>
            <RootNavigator />
        </AuthProvider>
    )
}
