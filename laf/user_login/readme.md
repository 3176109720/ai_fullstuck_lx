# VUE 全栈开发之用户登录

- 用户登录模块 
- 前后端分离思想
    - register  
    - http (核心)  来到后端 ？
        基于请求响应的简单协议 
        ctx 请求响应上下文对象
        ctx 它指向本次http请求
- 正则表达式  [object RrgExp]
    [0123456789]  范围内的一个字符， 只取一个
    0-9  - 范围  [0-9] [a-z] [A-Z] [a-zA-Z0-9]
    let reg = / 1[3-9][0-9]{9}/        (电话号码)  范围 首位为1   次位为3到9

- 登录
    - 校验表单数据 用正则
    - 检查用户名是否已经注册过  c o n u t
    - 密码单向加密
    -  a d d 
    - 响应对象   d a t a数据  error 错误对象
    