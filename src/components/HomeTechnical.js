import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'


import { getToken, getUserId, getUser } from '../storage/AuthStorage'
export default function HomeTechnical() {
    const [dataUser, setDataUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleStorage = async () => {
        try {
            setLoading(true);
            const data = await getUser();
            setDataUser(JSON.parse(data));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleStorage();
    }, [])

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>Error: {error.message || "Ocurrió un error inesperado"}</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.logged}>
                <Image source={{ uri: dataUser.urlPhotoProfile }} style={styles.img}></Image>
                <Text style={styles.welcomeMessage}>Bienvenido, {dataUser.name} {dataUser.lastName}</Text>
            </View>
            <View style={styles.body}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})