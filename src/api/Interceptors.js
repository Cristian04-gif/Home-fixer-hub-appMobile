import api from "./Client";
import { getToken } from "../storage/AuthStorage";
api.interceptors.request.use(

    async (config) => {

        const token = await getToken();

        if (token) {
            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(

    (response) => response,

    async (error) => {

        if (error.response?.status === 401) {
            console.log("No autorizado");
        }

        return Promise.reject(error);
    }
);