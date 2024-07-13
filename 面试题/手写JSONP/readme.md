## 解决跨域的问题(开发阶段好调试)
协议号  ip地址  端口号要一致


1.JSONP
1）ajax请求受同源策略的影响，但是<scrpit>上的src标签不受同源策略的影响，且该属性也会导致浏览器发送一个请求
- 1.借助script标签的src属性给后端发送一个请求，且携带一个参数('callback')
- 2.前端在window对象上添加了一个callback函数
- 3.后端收到这个参数callback后，将要返回给前端的数据data和这个参数'callback'进行拼接
- 4.因为前端在window上挂了一个callback函数，后端又返回了一个形如callback的调用，浏览器会将该字符串执行给callback的调用
//终于完成了jsonp,我太狂咯



手写了一个jsonp