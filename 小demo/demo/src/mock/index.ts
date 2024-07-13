
import Mock from 'mockjs'

//设置请求延时
Mock.setup({
    timeout:'200-2000',//单位为毫秒
   })
//设置拦截路径

// 三个参数 正则表达式 请求方法 请求的回调函数
Mock.mock(/\/api\/testApi/,'get',(req:any)=>{
    console.log(req);
    return{
        code:0,
        data:{
        msg:'mock测试成功~~~~'
        }
    }
})

Mock.mock(/\/api\/Login/,'post',(req:any)=>{
    // 账号池
    const userPools = [
        {name:'大山',password:'123456'},
        {name:'小美',password:'123456'},
        {name:'丧彪',password:'123456'},
    ]
    const {name, password} = JSON.parse(req.body)
    console.log(name);
    console.log(password);

    const user = userPools.find(user => user.name === name);

    if (user) {
        // 如果找到用户，则检查密码
        if (user.password === password) {
            return {
                code: 0,
                data: {
                    msg: '登录成功',
                    token: 'ncgl'                }
            };
        } else {
            return {
                code: -1,
                data: {
                    msg: '密码错误'
                }
            };
        }
    } else {
        // 如果未找到用户
        return {
            code: -1,
            data: {
                msg: '账号不存在'
            }
        };
    }
});

   export default Mock;