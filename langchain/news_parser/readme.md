# LangChain 实战

- LangChain  企业级的AI应用框架
- 写一个爬虫，爬取连接中的新闻标题并以
    json {
        news: [
        ]
    }
    格式返回
- 全栈功能
    python/node  http.request 
    字符串 正则表达式 
    /<item>(.*)</item>/g
- AI 怎么做？ 
- langchain 价值
    - AI 应用开发的通用架构
        - lang   心脏是LLM 而且是抽象的，可拔插的。
            OpenAI 成功后，大部分的模型借鉴或包容了他的接口，互换使用 
        - chain 
            自行车？  llm + prompt + dataset + nlp... 