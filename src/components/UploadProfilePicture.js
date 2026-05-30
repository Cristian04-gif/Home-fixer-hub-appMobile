import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useResponsive } from '../utils/useResponsive';
import { createStyles } from '../styles/UploadProfilePictureStyle';
import colors from '../utils/colors';
export default function UploadProfilePicture({ onValid, data, typeUser }) {
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const [imageProfile, setImageProfile] = useState(typeUser === 'tecnico' ? (data || null) : (data.photoProfile || null));



    const selectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert("Lo siento, necesitamos permisos par acceder a tus fotos");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7
        })


        if (!result.canceled) {
            setImageProfile(result.assets[0].uri);
        }
    }

    useEffect(() => {
        const esValido = imageProfile !== null;
        onValid(esValido, { photoProfile: imageProfile });

    }, [imageProfile])

    return (
        <View style={styles.container}>
            <Pressable onPress={selectImage} style={styles.avatarContainer}>
                {imageProfile ? (
                    <Image source={{ uri: imageProfile }} style={styles.avatar}></Image>
                ) : (
                    <View style={styles.placeholder}>
                        <AntDesign name="camera" size={30} color={colors.primary} />
                        <Text style={styles.placeholderText}>Añadir foto</Text>
                    </View>
                )}
            </Pressable>
        </View>
    )
}

