import axios from "axios";
const host = 'http://192.168.101.6:8080';
const api = axios.create({
    baseURL: host,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;