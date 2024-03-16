# vite 之前的前端工程化脚手架

- 把项目跑起来 
    vue 项目  .vue 组件 css(stylus) image....
    静态资源  前端就是如何打包这些静态资源 让他们执行

- 打包
    - 将src 项目下的资源  打包到 index.html 里面运行
    - vite/webpack  现代MVVM  开发工艺  基于命令行的后端实现
     webpack node
     vite node + go + rust
- vite webpack 比较
    - webpack 配置比较复杂 entry output plugin  
        webpack 学习成本高 配置复杂 
        vite 相对简单
    - vite script type=module 引入main.js入口文件
        利用了es6 Module  更快  bundless 1/10 
        webpack 早期的没有ES6 Module 可以使用 需要webpack来打理文件的依赖关系  打包 慢  
- dist目录就是我们要上线的目录
- babel 
    js 语法转换器  有了它 js 得到新生， js最新的语法，可以放心的使用，bable 会帮我们把最新的语法转换成浏览器可以理解的语法  
    @babel/core 核心功能
    @babel/preset-env  预处理  按环境要求编译相对应的代码  默认 es6+ -> es5 
    - wbpack  是厂长  总管
    - babel  是车间主任
    - 将相应后缀的文件拉到babel 车间转译  babel-loader 
        module  test  /\.js$/  
        编译的工作时间  