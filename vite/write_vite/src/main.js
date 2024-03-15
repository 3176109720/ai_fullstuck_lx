import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import -> require  
// 前端在ES6之前是没有模块化的 
// 所有的依赖关系全部都打包完 bundler
// <script src="c.js">
// <script src="b.js">
// <script src="a.js"> 

// type module  只需要加载需要的文件，不需要完全打包  就能运行 vite bundless 

createApp(App).mount('#app')
