## 海马体

- 2023年AIGC现象级应用
- 以前花99.9 拍证件照片
    需要化妆，修片，挑选风格，选择姿势， 证件照  简历
- 海马体app  使用AIGC 技术完成
    只需9.9， 上传自己的一些照片，就可以生成
- LLM 找到应用场景落地的成功案例
    tokens 赚钱的
- 我很想加入海马体 这只团队找到了AI落地的感觉，
    肯定会在更多的领域，找到AI产品开发的灵感，
    在这样的团队里做前端开发会有好未来，因为
    未来是属于AI的，未来一定是属于知道怎么让AI落地的团队的

- vuex 是数据流管理的设计模式， 由state（状态）、getters（获取器）、mutations（变更）和 actions（动作）构成
- UI组件(简单) + 数据管理(清晰共享)  大型项目
- 缺点 学习成本高，难理解 mutation 
- optionsAPI 太繁琐了，pinia和composition api 更搭
- pinia也更好理解  use 
- creatStore  store单例  为了确保数据的安全和正确  只能有一个管理 

- 请介绍一下自己
    了解你
    破冰
        我平时比较喜欢在掘金上写写技术文章  ->  es6
        通过阅读`源码`来提升代码能力  ->  vuex 

- vue 源码学到了什么
    - 严谨的代码逻辑
        vuex 根据type查找mutation的时候&& 找到了才会执行
    - 优秀的代码思想
        提升自己的代码能力
        

- vuex 源码学到了那些？
    - createStore 返回了store状态树单例
        因为它只会被调用一次  保持数据的正确性
    - provide inject
        use(store) 启用了vuex 生态
        install 方法， 传递app
    - dispatch commit 方法
    - API使用者 -> 了解底层和原理 -> 
    - es6 class 封装 Store 类
        - 把复杂留给自己，把简单交给别人
            options state 函数返回的对象是初始数据
            使用reactive() 响应式数据
            而且加上data 数据的概念
            完成响应式数据的创建 即this._state
        - _代表私有属性声明
            get 方法 get state 返回this._state.data
    - es6 class 语法 
        - es6 主要目的让JS 适合大型项目企业级开发 ，更简洁优雅
        - 箭头函数  解构  模板字符串  
            传统的面向对象支持
            class   constructor   extends   staic   get   set   
        - 依然原型链式的面向对象
        - class只不过就是语法糖
        - proxy 
            聊到reactive源码 
        - Map WeakMap    JSON Object  新的数据结构
            Set  WeakSet  

            let obj = {a:1}
            let obj2 = {b:2}
            obj[obj2] = 11
            new WeakMap() 

        - es6 模块化 
        - promise
        - async await 

