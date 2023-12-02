import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:4000/api',
    baseURL: 'https://apiproductos-dj0d.onrender.com',
    withCredentials: true,
    headers:{
        Accept: 'application/json'
    }
});

export default instance;