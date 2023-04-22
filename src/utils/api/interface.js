import api from "./axios";
import api1 from "./axios1";
export const VipManagement = () => api({
    url: '/depts',
    // url: '/depts',
    method: 'get',
    headers: {
        
    }
    // params: params
})
export const getproductList = () => api1({
    url: '/getProduct',
    // url: '/depts',
    method: 'get',
    // params: params
})


