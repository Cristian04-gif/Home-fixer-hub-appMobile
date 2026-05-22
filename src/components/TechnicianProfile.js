import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Reac, { useState, useEffect } from 'react';
import { getTechnicalAndService } from '../service/CatalogService';
export default function TechnicianProfile({ route }) {
    const { profile, service } = route.params;
    const [relatedInfo, setRelatedInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleProfileTechnical();
    }, [])

    const handleProfileTechnical = async () => {
        try {
            setLoading(true);
            const res = await getTechnicalAndService(profile.id, service.id);
            const data = await res;
            setRelatedInfo(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <ActivityIndicator size="large" />;
    }
    return (
        <View>
            <View>
                <Text>{profile.name} {profile.lastName}</Text>
                <Text>{service.name}</Text>
            </View>

            <View>
                <Text>Sobre mi</Text>
                <Text>{relatedInfo.description}</Text>
                <Text>Tarifa de visita: S/. {profile.visitFee}</Text>
                <Text>{profile.available ? "Disponible" : "No disponible"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})