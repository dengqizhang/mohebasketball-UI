import api from "./axios";
export const getadminproduct = () => api({
    url: '/admin/product/getAdminProduct',
    method: 'get'
})
export const daleteProduct = (id) => api({
    url: `/admin/product/deleteProduct/${id}`,
    method: 'post',
})
export const addProduct = (id, cname, url, price, stock) => api({
    url: `/admin/product/addProduct/?id=${id}&cname=${cname}&url=${url}&price=${price}&stock=${stock}`,
    method: 'post',
    data
})
export const updateProductapi = (id, data) => api({
    url: `/admin/product/updateproduct/${id}&${data}`,
    method: 'post',
})
//查询所有会员
export const getadminvip = () => api({
    url: '/admin/vip/getvip',
    method: 'get'
})
export const deleteadminvip = (id) => api({
    url: `/admin/vip/getvip/${id}`,
    method: 'post',
})
export const getuserproduct = () => api({
    url: '/user/product/getProduct',
    method: 'get',
})
//购物车里包含商品请求方法
export const getcat_products = (params) => {
    //对url参数进行编码
    const encodedParams = {}
    for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            encodedParams[key] = Array.isArray(params[key]) ? params[key].join(',') : params[key]
        }
    }
    //发送GET请求
    return api({
        url: '/user/car/getcar_products',
        method: 'get',
        params: encodedParams
    })
}
export const getuserorders = () => api({
    url: '/user/orders/ordersapi',
    method: 'get',
    headers: {
        Accept: 'application/json' // 指定接受JSON格式的响应数据
    }
})


