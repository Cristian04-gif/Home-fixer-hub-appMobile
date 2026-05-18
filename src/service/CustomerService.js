import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";

export const getCustomers = async () => {
    const response = await api.get(ENDPOINTS.PROFILE_CUSTOMER);
    return response.data;
};

export const getCustomersId = async (id) => {
    const response = await api.get(`${ENDPOINTS.PROFILE_CUSTOMER}/${id}`);
    return response.data;
};

export const registerCustomer = async (data) => {
    const response = await api.post(`${ENDPOINTS.PROFILE_CUSTOMER}/customer`, data);
    return response.data;
};

export const updateTechnical = async (id, data) => {
    const response = await api.put(`${ENDPOINTS.PROFILE_CUSTOMER}/customer/${id}`, data);
    return response.data;
};

export const deletetechnical = async (id) => {
    const response = await api.delete(`${ENDPOINTS.PROFILE_CUSTOMER}/customer/${id}`);
    return response.data;
};
