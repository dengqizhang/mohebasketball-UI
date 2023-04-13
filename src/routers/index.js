import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/home',
        name: "loginRoot",
        component: () => import('../components/login/loginRoot.vue')
    },
    {
        path: '/',
        name: "home",
        component: () => import('../components/home/home.vue'),
        children: [
            {
                path: 'DataReportPage',
                component: () => import('../components/home/DataReport/DataReportPage.vue'),
            },
            {
                path: 'demo',
                component: () => import('../components/home/DataReport/demo.vue'),
            },
            {
                path: 'VipManagement',
                component: () => import('../components/home/RootMenu/VipManagement.vue'),
            },
        ]
    },
    {
        path: '/DataReportPage',
        name: "DataReportPage",
        component: () => import('../components/home/DataReport/DataReportPage.vue')
    },
    {
        path: '/demo1',
        name: "demo1",
        component: () => import('../components/home/DataReport/safety_demo/demo1.vue'),
    },
    {
        path: '/demo2',
        name: "demo2",
        component: () => import('../components/home/DataReport/safety_demo/demo2.vue'),
    },

]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
