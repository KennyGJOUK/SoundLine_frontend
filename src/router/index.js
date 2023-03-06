import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const router = new Router({
    mode:'hash',
    routes:[
        {path: '/',component: () => import('@/components/Home'), children:[
                {path: 'home',component: () => import('@/components/Home/Main')},
                {path: 'start',component: () => import('@/components/Home/Start')},
                {path: 'recents',component: () => import('@/components/Home/Start')},
                {path: 'folders',component: () => import('@/components/Home/Start')},
                {path: 'more',component: () => import('@/components/Home/Start')},
        ]},
        {path: '/signup',component: () => import('@/components/Basic/Signup')},
        {path: '/login',component: () => import('@/components/Basic/Login')},

    ]
})
export default router;