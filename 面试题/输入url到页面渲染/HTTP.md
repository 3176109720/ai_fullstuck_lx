# HTTP 超文本传输协议 /0.9
  - 基于TCP
  - 只有请求行  GET /index.html
  - 以ASCII 字符流的编码方式来进行传输 

# HTTP /1.0
  - 0.9的缺点: 只支持html一种类型的资源传输 

  js，css，图片，视频，音频各种类型资源

  - 请求头
    accept: text/html;
    accept-encoding: gzip deflte br;
    accept-language: ch-CN 

  - 响应头
  content-type: text/html;
  content-encoding: br 

  - 为了解决不同的类型资源而诞生的 


# HTTP /1.1
  - 持久连接，减轻了服务器的负担

  - 同时最多维护6个持久连接

  - 队头阻塞
    1. 前一个http请求没有得到响应，后一个http请求无法发送

  - HOST 

  - 响应头: 
    1.0 Content-length: 1024

    后端动态内容生成，无法确定数据大小

    1.1   Chunk transfer  机制: 将资源文件处理成若干个数据块并编辑数据块的大小，最后发送一个标记为 0 的数据块，表示数据传输结束。

    