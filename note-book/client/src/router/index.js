import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: '登录'
        }

    },
    {
        path: '/Register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/NoteClass',
        name: 'NoteClass',
        component: () => import('@/views/NoteClass.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/NoteList',
        name: 'NoteList',
        component: () => import('@/views/NoteList.vue'),
        meta: {
            title: '笔记列表'
        }
    },
    {
        path: '/NoteDetail',
        name: 'NoteDetail',
        component: () => import('@/views/NoteDetail.vue'),
        meta: {
            title: '笔记详情'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局路由守卫
const whitePath = ['/Login', '/Register']
router.beforeEach((to, from) => {
    // console.log(to, from);

    document.title = to.meta.title

    if (!whitePath.includes(to.path)) {
        // 看本地存储有没有值
        if (!localStorage.getItem('userInfo')) {
            router.push('/Login')
            return
        }
    }
    // next()
})

export default router