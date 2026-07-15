import api from "../api/Client";
import { ENDPOINTS } from "../api/Endpoint";
import { getToken } from "../storage/AuthStorage";

const host = 'http://192.168.101.10:8080';

export const getCustomers = async () => {
    const response = await api.get(ENDPOINTS.PROFILE_CUSTOMER);
    return response.data;
};

export const getCustomersId = async (id) => {
    const response = await api.get(`${ENDPOINTS.PROFILE_CUSTOMER}/${id}`);
    return response.data;
};

export const getCustomersByUserId = async (userId) => {
    const response = await api.get(`${ENDPOINTS.PROFILE_CUSTOMER}/customer/userId/${userId}`);
    return response.data;
};

export const registerCustomer = async (data) => {
    const response = await api.post(`${ENDPOINTS.PROFILE_CUSTOMER}/customer`, data);
    return response.data;
};

export const uploadProfileCustomerPhoto = async (customerId, formData) => {
    const token = await getToken();

    const response = await fetch(`${host}${ENDPOINTS.PROFILE_CUSTOMER}/customer/${customerId}/upload-perfile`, {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        if (response.status === 401) {
            console.log("Token expirado o inválido en Fetch");
        }

        const errorText = await response.text();
        throw new Error(`Error en el servidor (${response.status}): ${errorText}`);
    }
    return await response.json();
};

export const updateTechnical = async (id, data) => {
    const response = await api.put(`${ENDPOINTS.PROFILE_CUSTOMER}/customer/${id}`, data);
    return response.data;
};

export const deletetechnical = async (id) => {
    const response = await api.delete(`${ENDPOINTS.PROFILE_CUSTOMER}/customer/${id}`);
    return response.data;
};


/// notification
export const savePushTokenCustomer = async (customerId, pushToken) => {
    const response = await api.put(`${ENDPOINTS.PROFILE_CUSTOMER}/notification/customer/${customerId}?pushToken=${pushToken}`);
    return response.data;
}



// consultas

export const getCustomerRequests = async(customerId) => {
    const response = await api.get(`${ENDPOINTS.BOOKING}/customer/${customerId}`);
    return response.data;
}

export const cancelQuery = async (bookingId) =>{
    const response = await api.put(`${ENDPOINTS.BOOKING}/${bookingId}/cancel`);
    return response.status;
}