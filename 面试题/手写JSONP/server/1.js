const Koa = require('koa')
const app = new Koa()


const main = (ctx) => {
    console.log(ctx.query);
    const cb = ctx.query.cb
    const data = '给前端的数据'
    const str = `${cb}('${data}')`//'callback()'
    ctx.body = str
}



app.use(main)


app.listen(3000, () => {
    console.log('跑在3000端口');
})