import api from "./axios";

export const VipManagement = () => api({
    url: '/depts',
    // url: '/depts',
    method: 'get',
    // params: params
})


