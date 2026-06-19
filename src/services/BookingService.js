import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";
import { getToken } from "../storage/AuthStorage";

import { getLocation } from '../hooks/useLocation';
import { getUser } from "../storage/AuthStorage";
export const registerBooking = async (data) => {
    try {
        const { latitude, longitude } = await getLocation();

        const customer = await getUser();
        if (latitude && longitude && customer) {
            const register = {
                serviceType: data.serviceType,
                title: data.title,
                description: data.description,
                latitude: latitude,
                longitude: longitude,
                totalAmount: data.totalAmount,
                customerId: customer.id,
                technicalId: data.technicalId
            }

            const response = await api.post(`${ENDPOINTS.BOOKING}/customer/consult`, register);
            const respuesta = response.data;
            return respuesta;

        } else {
            console.log("no se pudo registar la cconsulta")
        }
    } catch (error) {
        console.error(error);
    }
}