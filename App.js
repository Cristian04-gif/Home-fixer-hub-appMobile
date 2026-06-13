import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import TechnicalNavigator from './src2/navigation/TechnicalNavigator';
import AppNavigator from './src2/navigation/AppNavigator';


import './src2/api/Interceptors'
import { AuthProvider } from './src2/context/AuthContext';
import RootNavigator from './src2/navigation/RootNavigator';
export default function App() {
    return (
        <AuthProvider>
            <RootNavigator/>
        </AuthProvider>
    )
}
