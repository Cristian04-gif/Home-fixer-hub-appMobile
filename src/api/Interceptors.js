import api from "./Client";
import { getToken, logout } from "../storage/AuthStorage";
api.interceptors.request.use(

    async (config) => {

        const token = await getToken();


        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    }
);

api.interceptors.response.use(

    (response) => response,

    async (error) => {

        if (error.response?.status === 401) {
            console.log("token expirado");
            await logout();
        }

        return Promise.reject(error);
    }
);