import { createRouter, createWebHashHistory, } from "vue-router"
const routes = [
    {
        path: '/admin_login',
        name: "admin_login",
        component: () => import('../components/home/admin_home/admin_login.vue')
    },
    {
        path: '/',
        name: "home",
        component: () => import('../components/home/admin_home/admin_home.vue'),
        children: [
            {
                path: '/',
                name: "admin_datawork",
                component: () => import('../components/home/admin_home/admin_datawork.vue'),
            },
            {
                path: '/admin_vipadmin',
                name: "admin_vipadmin",
                component: () => import('../components/home/admin_home/admin_vipadmin.vue'),
            },
            {
                path: '/admin_productadmin',
                name: "admin_productadmin",
                component: () => import('../components/home/admin_home/admin_productadmin.vue'),
            },
        ]
    },
    {
        path: '/user_login',
        name: "user_login",
        component: () => import('../components/home/user_home/user_login.vue'),
    },
    {
        path: '/user_home',
        name: "user_home",
        component: () => import('../components/home/user_home/user_home.vue'),
        children: [
            {
                path: '/user_home/product',
                name: "user_product",
                component: () => import('../components/home/user_home/user_productsell.vue'),
            },
            {
                path: '/user_home',
                name: "user_datashow",
                component: () => import('../components/home/user_home/user_datashow.vue'),
            },
            {
                path: '/user_lookvip',
                name: "user_lookvip",
                component: () => import('../components/home/user_home/user_lookvip.vue'),
            },
            {
                path: '/user_order',
                name: "user_order",
                component: () => import('../components/home/user_home/user_order.vue'),
            },
            {
                path: '/user_nowuser',
                name: "user_nowuser",
                component: () => import('../components/home/user_home/user_nowuser.vue'),
            },
        ]
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
