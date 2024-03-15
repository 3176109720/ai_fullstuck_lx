# vite  工程化

- 前端项目构建脚手架
    - 快速启动项目
        git  拉一个项目模板
    - 命令行工具
        代码的编译 stylus -> css
        es6 -> es5
    - 配置
        alias 等
    - 现代的，相比较于传统的webpack 速度更快 
        - 不到 1s    go rust 这种构建工具， 比node 更快 
        webpack  10s 左右
        - script type = module  浏览器支持ES6 模块化
            有些旧浏览器不支持 兼容性问题  ie11之前就不支持了，需要webpack  把项目所有的文件先打包
            而vite 基于type=module  不用完全打包， 直接运行
            更快？ 



- vite 让项目运行起来的流程
    - npm run dev 背后发生了什么
        - index.html 首页 启动web服务器

