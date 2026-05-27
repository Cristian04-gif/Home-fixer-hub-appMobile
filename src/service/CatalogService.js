import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";

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
    const response = await api.post(`${ENDPOINTS.CATALOG}/skills/assing/fixer`, data);
    return response.data;
}