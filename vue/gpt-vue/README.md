## 如何表达项目亮点和难点

- 可以安排和设计的
   - gpt  AGI的时代
   AIGC 生成式的人工智能  OPENAI  chatgpt  应用形式 chatbot 
   文本生成  文本生成图片 (stablediffusion) 文本生成视频 (sora)
   AGI  通用人工智能  机器人  

   智能驾驶 
   终局思维 技术变革以来，L L M 加速了学习速度和能力，什么都能做 团队里想通过未来三年的团力，能成为一名优秀的开发工程师，陪团队一起拥抱AI红利

   - 项目亮点 技术栈 讲解一下 dependencies
     项目介绍 可以打好文稿，练了几次的  文稿大概一千字左右 
      - v u e / v u e - r o u t e r / p i n i a 全家桶
        陈述的过程，陈述技术栈是面试表达的必需 (没有亮点就是亮点)， 
      - t y p e s c r i p t 
      - 学习一下， dependiences  面试官希望听到有点深度的依赖包 
        - markdown-it 解析markdown 成 html
        - crypto-js 安全性 加密
        - tailwindcss
            - 原子化 css 开发省力高效 
            - css 工程化 开发依赖， 配置，生成css文件
            - 解决了适配问题 使用rem
            - 自定义过tailwindcss 组件类 @apply 一下 解决复用
### 项目亮点
  - 使用了路由懒加载
    - 优化了首页加载速度 性能关键 () => i m p o r t ()
    - S u s p e n s e 优化异步加载组件体验，比如显示 l o a d i n g . . . 
      - slot
        默认 具名...
    - 路由守卫
      transition 页面动画  
    - 骨架屏

  - 让面试官觉得代码的封装写的挺好的
    -干净漂亮的分离一些函数， 一个函数只做一个功能 (好代码)
    举例
      - getApikey  网上有个开源项目 提供免费的api-key
      - clearMessageContent
      - SwitchConfigStatus

- 难点 
  - 使用了 cryptoJS 加密了用户openai api-key 更安全 
    - 引入 crypto-js 
    - 调用 .AES.encrypt(原字符串，签名)
    - 拿到了 .AES.decrypt(加密后的字符串，签名) 

- 功能点介绍 应该围绕着某个模块讲
  - chatbot 模块
    - 与OpenAI LLM 进行生成式问答功能
    - 使用了crypto-js 对用户的api-key 进行加密
    - 根据功能点，函数封装的很细，便于复用和维护
      getApiKey saveApiKey getSecretKey clearMessageContent
      switchConfigStatus sendOrSave 