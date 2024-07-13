
import axios from "axios";

const http = axios.create({
});
// 请求拦截器
http.interceptors.request.use((req) => {
    return req
})
// 响应拦截器
http.interceptors.response.use((res) => {
    return res
})

export default http