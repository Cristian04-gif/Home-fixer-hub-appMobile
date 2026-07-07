import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";
import { getToken } from "../storage/AuthStorage";
const host = 'http://192.168.101.6:8080';

export const getImagesByTechnicalServiceId = async (technicalServiceId) => {
    const response = await api.get(`${ENDPOINTS.CATALOG}/images/public/technical-service/${technicalServiceId}`);
    return response.data;
}

export const assignImagesToTechnicianAndServiceRelationships = async (technicalServiceId, formData) => {
    const token = await getToken();

    const response = await fetch(`${host}${ENDPOINTS.CATALOG}/images/fixer/technical-service/${technicalServiceId}/ipload-images`, {
        method: 'POST',
        body: formData,
        headers: { 'Authorization': `Bearer ${token}`, },
    })
    if (!response.ok) {
        if (response.status === 401) {
            console.log('Token expirado o invalido en Fetch');
        }

        const errorText = await response.text();
        throw new Error(`Error en el servidor (${response.status}): ${errorText}`);
    }

    return await response.json();
}