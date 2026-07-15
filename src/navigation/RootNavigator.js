import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from "react-native";

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import { useAuth } from '../context/AuthContext';

export default function RootNavigator() {

    const {
        user,
        loading
    } = useAuth();

    if (loading) {

        return <ActivityIndicator size="large" />;

    }

    return (

        <>
            {
                user
                    ? <AppNavigator />
                    : <AuthNavigator />
            }
        </>


    );
}