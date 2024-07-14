import { createStore } from 'vuex'

export default createStore({
  state: {
    cartArray:[]
  },
  getters: {
  },
  mutations: {
    // 添加商品到购物车
    toCart(state: any,tag: any){
      const goods: any = state.cartArray.find((val: any) => {
        return val.id === tag.id
      })

      if (goods){
        goods.cartCount+=1
      } else {
        const item = {
          id:tag.id,
          title:tag.details,
          cartCount:1,
          img:tag.img
        }
        state.cartArray.push(item)
      }
    },

    getCart(state: any){
      console.log(state.cartArray);
      
    }
  },
  actions: {
  },
  modules: {
  }
  
})
