import axios from 'axios';
import Api from "./Api"

const axiosInstance = axios.create({
    baseURL: Api,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    },
});

export default axiosInstance;