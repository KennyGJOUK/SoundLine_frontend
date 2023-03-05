import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const router = new Router({
    mode:'hash',
    routes:[
        {path: '/', name : "Home",component: () => import('@/components/Home')},
        {path: '/signup',component: () => import('@/components/Basic/Signup')},
        {path: '/login',component: () => import('@/components/Basic/Login')},

    ]
})
export default router;