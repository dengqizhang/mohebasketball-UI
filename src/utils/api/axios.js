import axios from "axios";
import { reactive } from "vue";

const api = axios.create({
    //请求地址的公共部分
    baseURL: 'http://localhost:10010',
    headers: {
        'Content-Type': 'application/json'
    },
    //请求的超时时间
    timeout: 3000,
    withCredentials: false
})

//axios请求拦截器
api.interceptors.request.use(config => {
    //config的请求信息
    return config
}, err => {
    //抛出错误
    Promise.reject(err)
})
//axios响应拦截器
api.interceptors.response.use(res => {
    console.log(res);
    return Promise.resolve(res)
}, err => {
    //抛出错误
    Promise.reject(err)
})

export default api