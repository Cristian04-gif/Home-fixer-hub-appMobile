import { Alert } from "react-native";
import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";
import { assignImagesToTechnicianAndServiceRelationships } from "./ImagesService";
export const getCatalogServices = async () => {
    const response = await api.get(`${ENDPOINTS.CATALOG}/public/services`);
    return response.data;
};

export const getServiceById = async (id) => {
    const response = await api.get(`${ENDPOINTS.CATALOG}/public/service/${id}`);
    return response.data;
}

export const getTechnicalsByService = async (serviceId, pageNumber) => {
    const response = await api.get(`${ENDPOINTS.CATALOG}/public/service/${serviceId}/tecnicals?pageNumber=${pageNumber}`);
    return response.data;
}

export const getTechnicalAndService = async (technicalId, serviceId) => {
    const response = await api.get(`${ENDPOINTS.CATALOG}/public/technical-service/technical/${technicalId}/service/${serviceId}`);
    return response.data;
}


//

export const assignServiceToTechnician = async (data) => {
    console.log("asignar habilidad ", data)
    const body = {
        name: data.name,
        technicalId: data.technicalId,
        serviceId: data.serviceId,
        description: data.description,
        basePrice: data.basePrice,
    }

    try {
        const response = await api.post(`${ENDPOINTS.CATALOG}/skills/assing/fixer`, body);
        console.log("response 1: ", response.data)
        const technicalServiceId = response.data.id;
        console.log("id ",technicalServiceId)
        if (technicalServiceId !== null) {
            console.log("id ",technicalServiceId)
            console.log("condicional")
            await uploadImages(technicalServiceId, data.images);
        }
    } catch (error) {
        console.error(error)
    }
}


const uploadImages = async (technicalServiceId, images) => {
    console.log("id fotos ",technicalServiceId)
    
    if (images.length === 0) {
        Alert.alert('No hay imágenes', 'Selecciona al menos una imagen primero.')
        return;
    }
    console.log("subir fotos, ", technicalServiceId, images)
    try {
        const formData = new FormData();

        images.forEach((uri, index) => {
            const filename = uri.split('/').pop();
            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : 'image';

            formData.append('files', {
                uri,
                name: filename,
                type,
            });
        });

         await assignImagesToTechnicianAndServiceRelationships(technicalServiceId, formData);

    } catch (error) {
        console.error(error)

    }
}