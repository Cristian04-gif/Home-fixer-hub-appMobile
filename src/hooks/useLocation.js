
import * as Location from 'expo-location';


export const getLocation = async () => {

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        console.log("No se dio el permiso para usar la ubicacion")
        return null;
    }

    const location = await Location.getCurrentPositionAsync({});

    return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    };
}