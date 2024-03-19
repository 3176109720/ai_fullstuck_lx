const Koa = require('koa')
const bodyParser = require('koa-bodyparser')  //解析post请求的参数
const cors = require('koa2-cors')  // 处理跨域
const app = new Koa()

const user = require('./routers/user.js')
app.use(cors())
app.use(bodyParser())
app.use(user.routes(), user.allowedMethods())

app.listen(3000, () => {
    console.log('listening on port 3000')
})
