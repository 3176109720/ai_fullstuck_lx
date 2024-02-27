import axios from './axios.js'

export function getCart() {
  return axios.get('/shop-cart')
}

// export default getCart