import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import Reac, { useState, useEffect } from 'react';
import { getTechnicalAndService } from '../service/CatalogService';
import { useResponsive } from '../utils/useResponsive';
import { createStyles } from '../styles/TechnicianProfileStyle';
export default function TechnicianProfile({ route }) {
    const responsive = useResponsive();
    const styles = createStyles(responsive);

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
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.profile}>
                    <Image source={{ uri: profile.urlPhotoProfile }} style={styles.img}></Image>
                    <View>
                        <Image source={{ uri: profile.urlPhotoProfile }}></Image>
                        <Text style={styles.name}>{profile.name} {profile.lastName}</Text>
                        <Text style={styles.name}>{service.name}</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.title}>Sobre mi</Text>
                    <Text style={styles.textDescription}>{relatedInfo.description}</Text>
                    <Text style={styles.textDescription}>Tarifa de visita: S/. {profile.visitFee}</Text>
                    <Text style={{color: profile.available ? 'green': 'red', fontWeight: '600', fontSize: responsive.font(15)}}>{profile.available ? "Disponible" : "No disponible"}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({})