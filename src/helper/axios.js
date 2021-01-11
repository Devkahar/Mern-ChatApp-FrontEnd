import axios from 'axios';
import store from '../store/store'
let token = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2000/api',
    headers:{
        authorization:`Bearer ${token}`
    }
})

export default axiosInstance;
