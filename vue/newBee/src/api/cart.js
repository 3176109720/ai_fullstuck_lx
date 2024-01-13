import axios from "./axios";

export function getCart() { //获取购物车数据
    return axios.get('/shop-cart')
}

export function addToCart(params) { //添加购物车数据
    return axios.post('/shop-cart', params)
}

export function modifyCart(params) { // 修改购物车数据
    return axios.put('/shop-cart', params)
}

export function deleteCartItem(params) {
    return axios.delete(`/shop-cart/${params}`)
}

export function getCartItemIds(params) {
    return axios.get('/shop-cart/settle',{params})
}