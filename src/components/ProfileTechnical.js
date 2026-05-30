import { StyleSheet, Text, View, Pressable, Image, FlatList, Modal, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { logout } from '../storage/AuthStorage';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { getUser } from '../storage/AuthStorage';
import { getServicesForTechnical } from '../service/TechnicalService';
import Feather from '@expo/vector-icons/Feather';
import { useResponsive } from '../utils/useResponsive';
import { createStyles } from '../styles/ProfileTechnicalStyle';
export default function ProfileTechnical() {
    const navigation = useNavigation();
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const [dataUser, setDataUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [servicesTechnical, setServicesTechnical] = useState([]);

    const handleStorage = async () => {
    try {
        setLoading(true);

        const data = await getUser();

        const user = JSON.parse(data);

        setDataUser(user);

        if (user?.id) {
            await handleServices(user.id);
        }

    } catch (error) {
        console.log(error);
        setError(error);
    } finally {
        setLoading(false);
    }
};

    const handleServices = async (userId) => {
        try {
            const res = await getServicesForTechnical(userId);
            setServicesTechnical(res || []);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
    handleStorage();
}, []);

useEffect(() => {
    console.log("Usuario cargado:", dataUser);
}, [dataUser]);
    const cerrarSesion = async () => {
        await logout();
        navigation.navigate("Welcome");
    };

    if (!dataUser) {
    return <ActivityIndicator />;
}

    const renderItem = ({ item }) => (
        <View style={styles.serviceItem}>
            <View style={styles.nameService}>
                <Text style={styles.textService}>{item.icon}</Text>
                <Text style={styles.textService}>{item.name}</Text>
            </View>

            <Pressable style={styles.btnDelete}>
                <AntDesign name="delete" size={responsive.font(20)} color="red" />
            </Pressable>
        </View>
    );


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error: {error.message || "Ocurrió un problema"}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textheader}>Mi Perfil Profesional</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.me}>
                    <Image
                        source={{ uri: dataUser?.urlPhotoProfile }}
                        style={styles.mePhoto}
                    />
                    <View>
                        <Text style={styles.name}>{dataUser?.name} {dataUser?.lastName}</Text>
                        <Text style={{ marginVertical: 10 }}>Tarifa de visita: S/. {dataUser?.visitFee}</Text>
                    </View>
                </View>

                

                <View style={styles.professions}>
                    {servicesTechnical.length === 0 ?
                        <>
                            <Text>Aun no cuentas con ninguna profesion, añade una para que las personas te puedan encontrar</Text><Pressable style={styles.newService} onPress={() => navigation.navigate('NewSkillTechnical', {
                                technicalId: dataUser.id,
                            })}>
                                <Entypo name="add-to-list" size={responsive.font(20)} color="white" />
                                <Text style={styles.textBtnNew}>Añadir Profesión</Text>
                            </Pressable></>
                        :
                        <>
                            <Text style={styles.professionsTitle}>Mis profesiones</Text>
                            <FlatList
                                data={servicesTechnical}
                                keyExtractor={(item) => item.id?.toString()}
                                renderItem={renderItem}
                            />
                            <Pressable style={styles.newService} onPress={() => navigation.navigate('NewSkillTechnical', {
                                technicalId: dataUser.id,
                            })}>
                                <Entypo name="add-to-list" size={responsive.font(20)} color="white" />
                                <Text style={styles.textBtnNew}>Añadir Profesión</Text>
                            </Pressable>
                        </>}

                </View>

                <View style={styles.btns}>
                    <Pressable style={styles.btnEdit}>
                        <Feather name="edit" size={responsive.font(18)} color="white" />
                        <Text style={[styles.textBtn, { color: 'white', marginLeft: 8 * responsive.scale }]}>Editar Perfil</Text>
                    </Pressable>
                    <Pressable onPress={cerrarSesion} style={styles.btnLogaut}>
                        <Text style={styles.textBtn}>CERRAR SESION</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
}

