import { StyleSheet, Text, View, ActivityIndicator, FlatList, Pressable } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch';
import { getCatalogServices } from '../service/CatalogService';
import { useNavigation } from "@react-navigation/native";
import { useResponsive } from '../utils/useResponsive';
import { createStyles } from '../styles/ListServicesStyle';



export default function ListServices() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const { data, loading, error } = useFetch(getCatalogServices);

    const navigation = useNavigation();
    const handleTechnicals = (serviceItem) => {
        navigation.navigate("TechnicalForService", {
            service: serviceItem
        })
    }
    if (loading) return <ActivityIndicator></ActivityIndicator>
    if (error) return <Text>Error: {error}</Text>

    const renderItem = ({ item }) => (
        <Pressable onPress={() => handleTechnicals(item)} style={styles.btnService}>
            <Text style={styles.name}>{item.icon}  {item.name}</Text>
        </Pressable>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Servicios disponibles</Text>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>

    )
}

const styles = StyleSheet.create({})