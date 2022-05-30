import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import("../views/Index.vue")
    },
    {
        path: '/antrian',
        name: 'antrian',
        component: () => import("../views/Antrian.vue")
    },
    {
        path: '/poli',
        name: 'poli',
        component: () => import("../views/Poli.vue")
    },
    {
        path: '/login',
        name: 'auth.login',
        component: () => import("../views/auth/Login.vue")
    },
    {
        path: '/register',
        name: 'auth.register',
        component: () => import("../views/auth/Register.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router