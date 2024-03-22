import { createApp } from 'vue'
// vue  只负责响应式和组件  VDDM
// 其他交给生态
// use 
// store.install
import './style.css'
import App from './App.vue'
import store from './store'

createApp(App)
    .use(store)
    // .use(router)
    .mount('#app')
