import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/login',
        name: "loginRoot",
        component: () => import('../components/login/loginRoot.vue')
    },
    {
        path: '/',
        name: "home",
        component: () => import('../components/home/root_home/home.vue'),
        children: [
            {
                path: '/DataReportPage',
                component: () => import('../components/home/root_home/DataReport/DataReportPage.vue'),
            },
            {
                path: '/demo',
                component: () => import('../components/home/root_home/DataReport/demo.vue'),
            },
            {
                path: '/VipManagement',
                component: () => import('../components/home/root_home/RootMenu/VipManagement.vue'),
            },
        ]
    },
    {
        path: '/DataReportPage',
        name: "DataReportPage",
        component: () => import('../components/home/root_home/DataReport/DataReportPage.vue')
    },
    {
        path: '/demo1',
        name: "demo1",
        component: () => import('../components/home/root_home/DataReport/safety_demo/demo1.vue'),
    },
    {
        path: '/demo2',
        name: "demo2",
        component: () => import('../components/home/root_home/DataReport/safety_demo/demo2.vue'),
    },
    {
        path: '/user_home',
        name: "user_home",
        component: () => import('../components/home/user_home/user_home.vue'),
        children: [
            {
                path: '/product',
                name: "product",
                component: () => import('../components/home/user_home/user_home_product.vue'),
            },
            {
                path: '/user_home/',
                name: "datashow",
                component: () => import('../components/home/user_home/user_home_datashow.vue'),
            },
        ]
    },

]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
