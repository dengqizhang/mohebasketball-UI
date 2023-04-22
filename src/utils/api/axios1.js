import axios from "axios";
import { reactive } from "vue";

const api1 = axios.create({
    //请求地址的公共部分
    baseURL: 'http://localhost:9002',
    //请求的超时时间
    timeout: 3000
})

//axios请求拦截器
api1.interceptors.request.use(config => {
    //config的请求信息
    return config
}, err => {
    //抛出错误
    Promise.reject(err)
})
//axios响应拦截器
api1.interceptors.response.use(res => {
    console.log(res);
    return Promise.resolve(res)
}, err => {
    //抛出错误
    Promise.reject(err)
})

export default api1