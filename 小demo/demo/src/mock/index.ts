
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


Mock.mock(/\/api\/homePhoto/,'get',()=>{
    return{
        code:0,
        data:[
            {title: "轮播视频",
            bannerList:[
                {
                    img: "https://file.xdclass.net/video/2021/1-lbt/VIP/vip1299.png",
                    details:'超级会员',
                    id:1
                    },
                    {
                        img: "https://file.xdclass.net/video/2021/62-paas/lbt-paas.png",
                        details:'工业级微服务项目',
                        id:2
                    },
                    {
                        img: "https://file.xdclass.net/video/2021/aliyun/03lbt.png",
                        details:'阿里云服务器',
                        id:3
                    }
            ]
            },
            {
                title:'热门视频',
                videoList:[
                    {
                        img: "https://file.xdclass.net/video/2021/61-RabbitMq/zt.jpg",
                        details:'容器化分布式集群实战',
                        id:4
                    },
                    {
                        img: "https://file.xdclass.net/video/2020-12%20%E5%AE%98%E7%BD%91%E8%B6%85100k%E4%B8%BB%E5%9B%BE%E6%9B%B4%E6%96%B0/%E4%B8%BB%E5%9B%BE/57-alibabacloud.jpg",
                        details:'AlibabaCloud',
                        id:5
                    },
                    {
                        img: "https://file.xdclass.net/video/2020/SSM/zt-ssm.png",
                        details:'ssm新版',
                        id:6
                    },{
                        img: "https://file.xdclass.net/video/2020-12%20%E5%AE%98%E7%BD%91%E8%B6%85100k%E4%B8%BB%E5%9B%BE%E6%9B%B4%E6%96%B0/%E4%B8%BB%E5%9B%BE/37-yhq.jpeg",
                        details:'微服务Dubbo',
                        id:7
                    },{
                        img: "https://file.xdclass.net/video/2021/59-Postman/Postman.png",
                        details:'Postman',
                        id:8
                    },{
                        img: "https://file.xdclass.net/video/2021/60-MLS/cover.jpeg",
                        details:'MybatisPlus',
                        id:9
                    },{
                        img: "https://file.xdclass.net/video/2020/SSM/zt-ssm.png",
                        details:'ssm新版',
                        id:10
                    },{
                        img: "https://file.xdclass.net/video/2021/61-RabbitMq/zt.jpg",
                        details:'RabbitMQ',
                        id:11
                    }
                ]
            }
        ]
    }
})

   export default Mock;