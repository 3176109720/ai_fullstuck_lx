## 发布订阅
发布订阅是一种设计模式，一个用来发布事件，一个订阅相关的事件。
举一个例子来说明发布订阅就是。你要买房子，但是一期楼盘已经卖完了，二期还在建，但是你怕二期也抢不到，天天跑售楼部去看，然后小姐姐也被你整的很烦躁，这个人是不是有病，但是她不好意思直接说，她突然想到自己的公司有一个微信公众号，啥时候开盘会在公众号里等通知，所以呀，你就订阅了这个公众号。等售楼部发布开卖，你就可以去买了，这就是一个发布订阅的思想。

发布订阅可以用在什么地方呢？
父向子传值，可以用发布订阅的方式。


发布订阅里面有四种方法
1.on  将订阅的事件，进行一个收集，存在一个对象里面，以事件名为键，方法，存在数组里面。
2.off  删除某个事件的某一个方法
3.once 一个事件值存储一个方法
4.emit 发布事件，也就是触发该事件里面的依赖。