import { useSessionStore } from "@/stores/session";
import axios from "axios";

const BASE_URL = "http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = useSessionStore().token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;