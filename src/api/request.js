import axios from 'axios';
import {
    Toast
} from 'vant';
let services = axios.create({
    baseURL: '/wow',
    timeout: 5000,
})

let load;
services.interceptors.request.use(config => {
    load = Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0
    });
    return config
})

services.interceptors.response.use(res => {
    load.clear();
    return res.data;
})


export default services;