import axios from "axios";

const api = axios.create({
    baseURL: "http://10.248.65.166:8080",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});



export default api;