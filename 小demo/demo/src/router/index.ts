import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/Login'
  },
  {
    path: '/login',
    name: 'LoginHome',
    component: ()=>import('../components/Login/Login.vue')
  },
  {
    path: '/home',
    name: 'HomePage',
    component: ()=>import('../components/Home/Home.vue'),
    redirect: '/homeTop',
    children:[
      {
        path: '/hometop',
        name: 'HomeTop',
        component: ()=>import('../components/Home/components/top.vue')
      },
      {
        path: '/shopcart',
        name: 'ShopCart',
        component: ()=>import('../components/Shop/ShopCart.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach((to, from, next)=>{
  const token = window.sessionStorage.getItem('token')
  if(to.path === '/login'){
    next()
  }else{
    token ? next() : next('/login')
  }
})


export default router
