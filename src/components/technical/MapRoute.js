import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { getGoogleMapsKey } from '../../config/env';


export default function MapRoute({ styles, coordenadas }) {
    const GOOGLE_MAPS_APIKEY = getGoogleMapsKey();

    return (
        < View style={styles.mapContainer} >
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                initialRegion={{
                    latitude: coordenadas.origenTecnico.latitude,
                    longitude: coordenadas.origenTecnico.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                pitchEnabled={false}
                rotateEnabled={false}
            >
                <Marker coordinate={coordenadas.destinoCliente} title="Destino" />

                <Marker coordinate={coordenadas.origenTecnico} title="Tu ubicacion">
                    <View style={styles.customMarkerCircle}>
                        <View style={styles.innerMarkerCircle} />
                    </View>
                </Marker>

                <MapViewDirections
                    origin={coordenadas.origenTecnico}
                    destination={coordenadas.destinoCliente}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={4}
                    strokeColor="#007AFF"
                    optimizeWaypoints={true}
                    onError={(errorMessage) => {
                        console.error('Error en ruta: ', errorMessage);
                    }}
                />
            </MapView>
        </View >
    )
}
