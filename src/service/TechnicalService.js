import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";
import { getToken } from "../storage/AuthStorage";
export const getTechnicals = async () => {
    const response = await api.get(ENDPOINTS.PROFILE_TECHNICAL);
    return response.data;
};

export const getTechnicalById = async (id) => {
    const response = await api.get(`${ENDPOINTS.PROFILE_TECHNICAL}/${id}`);
    return response.data;
};

export const gettechnicalByUserId = async (userId) => {
    const response = await api.get(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer/user/${userId}`);
    return response.data;
}

export const registerTechnical = async (data) => {
    const response = await api.post(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer`, data);
    return response.data;
};

export const uploadProfileTechnicalPhoto = async (technicalId, formData) => {
    const tokken = await getToken();

    const response = await fetch(`http://10.248.26.143:8080${ENDPOINTS.PROFILE_TECHNICAL}/fixer/${technicalId}/upload-perfile`, {
        method: 'POST',
        body: formData,
        headers: { 'Authorization': `Bearer ${tokken}`, },
    });

    if (!response.ok) {
        if (response.status === 401) {
            console.log('Token expirado o invalido en Fetch');
        }

        const errorText = await response.text();
        throw new Error(`Error en el servidor (${response.status}): ${errorText}`);
    }
    return await response.json();
}

export const updateTechnical = async (id, data) => {
    const response = await api.put(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer/${id}`, data);
    return response.data;
};

export const deletetechnical = async (id) => {
    const response = await api.delete(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer/${id}`);
    return response.data;
};



/////////////////////////
export const getServicesForTechnical = async (technicalId) => {
    const response = await api.get(`${ENDPOINTS.CATALOG}/skills/fixer/technical/${technicalId}`);
    return response.data;
};