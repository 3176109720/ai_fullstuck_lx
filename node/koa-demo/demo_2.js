const Koa = require('koa');
const app = new Koa()

const main = (ctx) => { // ctx === req + res 
  // console.log(ctx.query.id);
  // ctx.body = `hello ${ctx.query.id}`

  console.log(ctx.url);
  if (ctx.url.startsWith('/login')) {
    // 前端在登录

    ctx.body = {
      data: 'success',
      msg: '登录成功'
    }

  } else if (ctx.url.startsWith('/home')) {
    // 前端想要首页的数据
    ctx.body = {
      data: [
        {id: 1, name: 'Tom', email: '123121@qq.com'},
        {id: 2, name: 'Tom2', email: '123121@qq.com'},
        {id: 3, name: 'Tom3', email: '123121@qq.com'},
      ]
    }
  }

}

app.use(main)

app.listen(3000, () => {
  console.log('项目已启动');
})