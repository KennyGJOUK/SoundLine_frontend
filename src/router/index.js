import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const router = new Router({
    mode:'hash',
    routes:[
        {path: '/',component: () => import('@/components/Home'), children:[
                {path: 'home',component: () => import('@/components/Home/Main')},
                {path: 'start',name:'Start',component: () => import('@/components/Home/Start')},
                {path: 'recent',name:'Recents',component: () => import('@/components/Home/Recent')},
                {path: 'folder',name:'Folders',component: () => import('@/components/Home/Folder')},
                {path: 'folder_detail',component: () => import('@/components/Home/Folder/FolderDetail')},
                {path: 'recent_detail',component: () => import('@/components/Home/Recent/NoteDetail')},
                {path: 'more',name:'More',component: () => import('@/components/Home/Main')},
        ]},
        {path: '/signup',component: () => import('@/components/Basic/Signup')},
        {path: '/login',component: () => import('@/components/Basic/Login')},

    ]
})
export default router;