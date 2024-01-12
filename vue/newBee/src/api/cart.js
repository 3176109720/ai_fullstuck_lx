import axios from "./axios";

export function getCart() {
    return axios.get('/shop-cart')
}

export function addToCart(params) {
    return axios.post('/shop-cart', params)
}

export function modifyCart(params) {
    return axios.put('/shop-cart', params)
}

export function deleteCartItem(params) {
    return axios.delete(`/shop-cart/${params}`)
}