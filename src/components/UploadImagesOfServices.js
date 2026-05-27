import { StyleSheet, Text, View, Button, Image, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImagesOfServices({ onValid, data }) {
    const [images, setImages] = useState(data.images || []);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permiso denegado', "Necesitamos acceso a tus fotos");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled) {
            setImages([...images, result.assets[0].uri]);
        }
    }

    useEffect(() => {
        const esvalido = images.length > 0;
        onValid(esvalido, { images: images })
    }, [images])
    return (
        <View style={styles.container}>
            <Button title="Seleccionar Imagenes" onPress={pickImage} />
            <ScrollView horizontal style={styles.scroll}>
                {images.map((uri, index) => (
                    <Image key={index} source={{ uri }} style={styles.image} />
                ))}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
    scroll: { marginVertical: 20 },
    image: { width: 100, height: 100, marginRight: 10, borderRadius: 10 },
});