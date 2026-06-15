import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";
import { getToken } from "../storage/AuthStorage";

export const dahsboardTechnical = async (technicalId) => {
    const response = await api.get(`${ENDPOINTS.BOOKING}/dashboard/fixer/${technicalId}`);
    return response.data;
}