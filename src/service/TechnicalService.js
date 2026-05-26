import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";

export const getTechnicals = async () => {
    const response = await api.get(ENDPOINTS.PROFILE_TECHNICAL);
    return response.data;
};

export const getTechnicalById = async (id) => {
    const response = await api.get(`${ENDPOINTS.PROFILE_TECHNICAL}/${id}`);
    return response.data;
};

export const registerTechnical = async (data) => {
    const response = await api.post(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer`, data);
    return response.data;
};

export const uploadProfilePhoto = async (technicalId, fromData) => {
    const response = await api.post(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer/${technicalId}/upload-perfile`, fromData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
    return response.data;
}

export const updateTechnical = async (id, data) => {
    const response = await api.put(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer/${id}`, data);
    return response.data;
};

export const deletetechnical = async (id) => {
    const response = await api.delete(`${ENDPOINTS.PROFILE_TECHNICAL}/fixer/${id}`);
    return response.data;
};
