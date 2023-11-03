# 跨境电商
AI 开店
开玩具店 -> 拼多多海外版
- 语言不通 需要翻译 NLP 不用打开google 翻译，写程序
    pipeline('translate') 
    AIGC 生成 
- 卖什么玩具？
- 卖多少钱
- 营销内容怎么写有搞头

- 如何让openai 帮你开店
    大模型(openai 接口调用) + Prompt Engineer （编写pprompt）

## Prompt 工程
会问问题的人比解决问题的更nb
大模型超越了大多数人的能力

## openai 封装的过程

python特别适合NLP
而且一个功能写法就一种
风格 缩进
def get_response(prompt):
调用了openai库的Completions模块（其他模块）.create方法
向openai 发送网络请求
    completions = openai.Completions.create(
        engine=,
        prompt=, 吴恩达prompt
        temperature=0  自由度
        max_tokens=512 最大tokens限制 省钱
    )
    <!-- python是同步的  JS是异步的 -->
    print(completions)
    result = completions[0].choices.text
    return result