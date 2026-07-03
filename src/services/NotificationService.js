import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    })
});

export async function registerForPushNotificationsAsync() {
    let token = null;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 255, 255, 255],
            lightColor: "#FF231F7A"
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert("¡Falló el permiso para recibir notificaciones push!");
            return null;
        }

        try {
            const expoTokenResponse = await Notifications.getExpoPushTokenAsync();
            token = expoTokenResponse.data;
            console.log("¡ÉXITO! Tu Push Token Real es: ", token);
        } catch (error) {
            console.warn("Error leyendo el token: ", error.message);
            token = null;
        }
    } else {
        alert("Debes usar un dispositivo físico para usar Notificaciones Push");
    }

    return token;
}