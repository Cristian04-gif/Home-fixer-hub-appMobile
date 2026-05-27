import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    ActivityIndicator,
    Pressable,
    Image
} from "react-native";
import React, {
    useState,
    useEffect,
    useMemo,
    useRef,
    useCallback,
} from "react";
import { createStyles } from "../styles/HomeCustomerStyle";

import { useResponsive } from "../utils/useResponsive";

//components
import EvilIcons from "@expo/vector-icons/EvilIcons";
import colors from "../utils/colors";
import ListServices from "./ListServices";
import useFetch from "../hooks/useFetch";
import { getCatalogServices } from "../service/CatalogService";
import { getCustomersByUserId } from "../service/CustomerService";
import { getToken, getUserId, getUser } from "../storage/AuthStorage";

function HomeCustomer() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleStorage = async () => {
            try {
                const user = await getUser();
                if (user) {
                    setData(JSON.parse(user));
                }
            } catch (err) {
                console.error(err);
                setError(err.message || err);
            } finally {
                setLoading(false);
            }
        };
        handleStorage();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.logged}>
                {data?.urlPhotoProfile && (
                    <Image source={{ uri: data.urlPhotoProfile }} style={styles.img} />
                )}
                <Text style={styles.welcomeMessage}>
                    Bienvenido, {data?.name || ""} {data?.lastName || ""}
                </Text>
            </View>
            <View style={styles.body}>
                <ListServices />
            </View>
        </View>
    );
}

export default HomeCustomer;
