import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
<<<<<<< HEAD:src/router/index.js
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/antrian",
    name: "antrian",
    component: () => import("../views/Antrian.vue"),
  },
  {
    path: "/poli",
    name: "poli",
    component: () => import("../views/Poli.vue"),
  },
  {
    path: "/login",
    name: "auth.login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "auth.register",
    component: () => import("../views/auth/Register.vue"),
  },
  {
    path: "/logout",
    name: "auth.logout",
  },
  {
    path: "/admin",
    name: "admin.index",
    component: () => import("../views/admin/Admin.vue"),
  },
];
=======
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
    },
    {
        path: '/logout',
        redirect: '/login' 
    }
]
>>>>>>> 62ecabd115f940c5ea1537a9476354f915fbfc58:src/router/router.js

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  linkExactActiveClass: "active",
});

export default router;
