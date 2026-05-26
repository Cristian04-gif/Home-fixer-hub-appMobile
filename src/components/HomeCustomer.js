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
import { getToken, getUserId } from "../storage/AuthStorage";
import { decodeToken } from "../utils/jwt";


//////////////////////////////

function HomeCustomer() {
    const responsive = useResponsive();
    const styles = createStyles(responsive);

    const [userId, setUserId] = useState("");
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleStorage = async () => {
            try {
                setLoading(true);
                const id = await getUserId();
                setUserId(id);
                const res = await getCustomersByUserId(id);
                setData(res);
                if (res !== null) setLoading(true);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        handleStorage();
    }, []);
    if (!loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.logged}>
                <Image source={{uri: data.urlPhotoProfile}} style={styles.img}></Image>
                <Text style={styles.welcomeMessage}>Bienvenido, {data.name} {data.lastName}</Text>
            </View>
            <View style={styles.body}>
                <ListServices></ListServices>
            </View>
        </View>
    );
}

export default HomeCustomer;
