import axios from 'axios';

const token = localStorage.getItem('token')
const axiosInstance = axios.create({
    baseURL: 'http://localhost:2000/api',
    headers:{
        authorization:`Bearer ${token}`
    }
})

export default axiosInstance;
