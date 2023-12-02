# js 代码是异步执行的

# 回调函数
- 回调地狱: 代码维护困难

# Promise 
1. Promise 实例对象后面可接 .then() then中的回调的执行取决于promise中的resolve有没有生效
2. resolve(参数) 参数会传递给 then 中的回调函数 
3. then 方法会默认返回promise对象，所以then2 可以接在then 后面，当then 当中有认为返回新的promise对象时，then 就会将返回的promise对象作为唯一的返回值，那么then2 就相当于接在认为返回的promise对象后

# async await

