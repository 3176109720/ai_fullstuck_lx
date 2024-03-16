// 让我们的node 支持更先进的ES6 Module 
// VUE MVVM  设计模式 Commonjs 不够优秀， ESModule
// 为了代码统一 
// Node require 代码风格不统一 js 优势就是 一份代码前后端 运行
// 统一模块化 干掉CommonJS
import { OpenAIApi, Configuration } from 'openai'
// api key 配置
const configuration = new Configuration({
  apiKey: '',
})

const openai = new OpenAIApi(Configuration)
// 封装了一个聊天函数
// chat 业务 
async function chat(input) {
    // system  assistant 
    // 上下文语义相关性 靠把一个数组 把问的问题和返回的内容不断地存入这个数组
    // JSON.stringify() 传给 openai 得到最新结果
    // role:'asssistant', content: content
    const messages = [{role:'user', content: input}]
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages,
        temperature:0
    },{
        proxy: {
            host: '127.0.0.1',
            port: 7890
        }
    })
    return response.data.choices[0].message.content   // 返回结构
}

const question = "what is the capital of France"
chat(question) 
    .then(response => console.log(response))
    .catch(error => console.log(error))
