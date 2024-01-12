import {createStore} from 'vuex'
import {} from '@/api/cart.js'
import { getCart } from '../api/cart'


const store = createStore({
    state() { // 全局公共数据源  === data的概念
        return {
            cartCount: 0
        }
    },
    mutations: { // 业务逻辑  === methods  专职修改 state
        setCartCount(state, count) {
            state.cartCount = count
        }
    },
    actions: {  // 异步操作  ===  async methods  调用 mutations
        async setCartCountAction(context) {
            const {data} = await getCart()
            // console.log(data);
            context.commit('setCartCount', data.length)  
        }
    },
    getters: { // 计算属性  === computed properties
    }
})

export default store