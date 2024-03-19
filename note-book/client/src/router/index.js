import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/Register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/NoteClass',
        component: () => import('@/views/NoteClass.vue')
    }



]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router