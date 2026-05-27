import { StyleSheet, Text, View, Modal, Pressable, ActivityIndicator, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { getCatalogServices, assignServiceToTechnician } from '../service/CatalogService';
import UploadImagesOfServices from './UploadImagesOfServices';
import { assignImagesToTechnicianAndServiceRelationships } from '../service/ImagesService';
import { getUser } from '../storage/AuthStorage';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from '../utils/useResponsive';
import { createStyles } from '../styles/NewSkillTechnicalStyle';
export default function NewSkillTechnical({ route }) {
    const responsive = useResponsive();
    const styles = createStyles(responsive);
    const navigation = useNavigation();
    const { technicalId } = route.params;
    const [allService, setAllService] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isValid, setIsvalid] = useState(false);

    const [newService, setNewService] = useState({
        technicalId: technicalId,
        serviceId: '',
        description: '',
        images: []
    })

    useEffect(() => {
        handeService();
    }, [])

    const handeService = async () => {
        try {
            setLoading(true);
            const res = await getCatalogServices();
            setAllService(res);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

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

    const uploadImages = async (technicalServiceId) => {
        if (newService.images.length === 0) {
            Alert.alert('No hay imagenes', 'Selecciona al menos una imagen primero');
            return;
        }

        try {
            const formData = new FormData();

            newService.images.forEach((uri, index) => {
                const filename = uri.split('/').pop();
                const match = /\.(\w+)$/.exec(filename);
                const type = match ? `image/${match[1]}` : 'image';

                formData.append('files', {
                    uri,
                    name: filename,
                    type,
                });
            })

            await assignImagesToTechnicianAndServiceRelationships(technicalServiceId, formData);
        } catch (error) {
            console.error(error);
        }
    }

    const actualizarValidacion = (completed, data) => {
        setIsvalid(completed);
        if (data) {
            setNewService((prev) => ({ ...prev, ...data }));
        }
    }

    const registerRelationship = async () => {
        try {
            const relation = {
                technicalId: newService.technicalId,
                serviceId: newService.serviceId,
                description: newService.description,
            }
            const created = await assignServiceToTechnician(relation);
            if (created) {
                uploadImages(created.id);
                navigation.navigate('Home');
            }

        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (campo, valor) => {
        setNewService({
            ...newService,
            [campo]: valor
        });
    };


    const renderItem = item => {
        return (
            <View style={styles.dropdownItem}>
                <Text style={styles.dropdownItemtext}>{item.name}</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.section}>
                    <Text style={styles.label}>Servicios</Text>
                    <Dropdown
                        placeholder='Escoge un servicio'
                        style={styles.dropdown}
                        data={allService}
                        maxHeight={300}
                        valueField="id"
                        labelField={'name'}
                        value={newService.serviceId}
                        onChange={(item) => handleChange('serviceId', item.id)}
                        renderItem={renderItem}

                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Descripcion</Text>
                    <TextInput
                        style={styles.description}
                        placeholder='Ingresa una descripcion de tu trabajo'
                        value={newService.description}
                        onChangeText={(text) => handleChange('description', text)}
                    />
                </View>
                <UploadImagesOfServices onValid={actualizarValidacion} data={newService}></UploadImagesOfServices>
                <Pressable
                    disabled={!isValid}
                    style={styles.btnRegister}
                    onPress={registerRelationship}
                >
                    <Text style={styles.txtAgregar}>Agregar</Text>
                </Pressable>
            </View>

        </View>
    )
}

