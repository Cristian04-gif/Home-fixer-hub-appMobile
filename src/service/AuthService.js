import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";

export const login = async (data) => {
    const response = await api.post(ENDPOINTS.LOGIN, data);
    return response.data;
};

export const register = async (data) => {
    const response = await api.post(ENDPOINTS.REGISTER, data);
    return response.data;
};