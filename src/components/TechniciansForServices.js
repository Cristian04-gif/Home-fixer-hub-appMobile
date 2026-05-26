import { StyleSheet, Text, View, FlatList, Pressable, ActivityIndicator, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { getTechnicalsByService } from '../service/CatalogService';
import { useResponsive } from '../utils/useResponsive';
import { createStyles } from '../styles/TechniciansForServicesStyles';
import { useNavigation } from "@react-navigation/native";

export default function TechniciansForServices({ route }) {
    const { service } = route.params;
    const responsive = useResponsive();
    const styles = createStyles(responsive);

    const [technicals, setTechnicals] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [lastPage, setLastPage] = useState(false);

    useEffect(() => {
        loadTechnicals();
    }, [])

    const loadTechnicals = async () => {
        if (loading || lastPage) return;

        setLoading(true);

        try {
            const response = await getTechnicalsByService(service.id, page);
            const data = await response;

            setTechnicals((prev) => [...prev, ...data.technicals]);

            setLastPage(data.last);
            setPage((prev) => prev + 1);
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    const navigation = useNavigation();
    const viewProfile = (item, service) => {
        navigation.navigate("TechnicianProfile", {
            profile: item,
            service: service
        });
    }

    const renderItem = ({ item }) => (
        <Pressable style={styles.card} onPress={() => viewProfile(item, service)}>
            <Image source={{ uri: item.urlPhotoProfile }} style={styles.img}></Image>
            <View>
                <Text style={styles.name}>
                    {item.name} {item.lastName}
                </Text>

                <Text style={styles.description}>DNI: {item.dni}</Text>

                <Text style={styles.description}>Tarifa de visita: S/. {item.visitFee}</Text>

                <Text
                    style={styles.description,{
                        color: item.available ? "green" : "red",
                        marginTop: 5 * responsive.scale,
                    }}
                >
                    {item.available ? "Disponible" : "No disponible"}
                </Text>
            </View>

        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FlatList
                    style={styles.list}
                    data={technicals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    onEndReached={loadTechnicals}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={
                        loading ? <ActivityIndicator size="large" color="#000" /> : null
                    }
                />
            </View>
        </View>
    )
}

