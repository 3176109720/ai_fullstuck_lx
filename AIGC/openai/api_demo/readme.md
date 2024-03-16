## openai api demo

- 自我介绍
    - 了解openai的接口调用，完成内容生成，情感分析等NLP任务  

- 高级的模块化方案理解 
    - 早期js没有模块化方案 
        完成一些事件 执行脚本 
    - node 
        程序执行的根本二进制可执行文件  
        js chrome v8引擎  js 代码文本 -> v8 字节码  
        node 使用c++ 封装了v8引擎  需要引入模块化机制  commonJS 
        编译器  
        缺点？ MVC ？ Model-View-Controller   模型和视图不直接关联， 
        /posts -> 后端路由 -> controller  
    - commonjs 和ES6模块化 相比 ？ ES6 Module 更优秀 
    - 如何在node 中使用es6 Module  mjs 
 

- JS 模块化
- 异步处理
    async await ES7
    - 举例 AIGC openai 端口 封装 chat async 函数
        因为在内部调用的openai chat 接口是异步的
        - chat messages 是数组
            ayatem 出现一次， 用于指定chat bot 的责任 假如你是一位前端大厂的p8面试官
            user 用户 提问内容
            assistant 助理，openai 返回内容

            openai 可以接受比较长的token 为了回答问题更人性化
            messages 会越来越大， 聊天上下文 (context)

- open tokens 是有上限的吧？ 该怎么办？ top_K
    LRU 最近最少使用原则 
    