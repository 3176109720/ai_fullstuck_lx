# 1. js数组上有哪些方法？
1. 增加： push  unshift  splice  concat
2. 删除：pop  shift  splice  slice
3. 改：reverse sort  
4. 查：indexOf includes  lastIndexOf  find
5. 转换：join
6. 迭代：forEach  map  filter  some  every 
7. Array.from()   Array.of()


# 2. js字符串上有哪些方法？
1. 增：concat
2. 删: slice  substr  substring
3. 改：replace  trimRight  trimLeft  trim   padStart  padEnd  toUpperCase toLowerCase
4. 查：indexOf includes lastIndexOf find  endsWith  startWith
5. 转换: split

# 3. 谈谈js中的类型转换机制
- 是什么：
js中有原始类型和引用类型：
原始类型：number  string  symbol  boolean  undefined  null  Bigint 
引用类型：[]  {}  function  Date  Regexp  Set  Map

通常开发过程中，会用到一些显示类型转换的手段来完成逻辑开发
Number() ...

在V8执行过程中还存在另一种类型转换 --- 隐式类型转换

通常发生在  比较运算符  和  算术运算符

==  !=  <  >  if  while

+ - * / %


[] == ![]  


# 4. == 和 === 的区别？

# 5. 深浅拷贝的区别？如何实现一个深拷贝？
- 深浅拷贝通常只针对引用类型

- 浅拷贝：只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型的话，就复制它的指针

  Object.assign   concat  slice   [...arr]

- 深拷贝：层层拷贝，所有类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象
  JSON.parse(JSON.stringify(obj))  --- 无法处理 undefined  Symbol  function  -- 无法处理循环引用


# 6. 说说你对闭包的理解
- 是什么
当一个函数中的内部函数被拿到函数外部调用，又因为在js中内层作用域总是能访问外层作用域的，那么内部函数存在对外部函数中变量的引用，这些变量的集合称之为闭包

- 使用场景：
 1. 创建私有变量  （全局变量不易维护）
 2. 延长变量的生命周期
 3. 实现柯里化（颗粒）

- 缺点：会造成内存泄漏

# 7. 什么是柯里化？
- 是什么
  将一个接受多个参数的函数转变成多个只接受一个参数的函数

# 8. 说说你对作用域的理解
- 是什么：
 变量和函数能够生效的区域，这个区域叫作用域

- 有哪些：
 1. 全局作用域
 2. 函数作用域
 3. 块级作用域

- 作用域链：作用域只能从内到外的访问，这种访问规则形成的链状关系我们称之为作用域链

- 词法作用域：指的是函数或变量定义的区域

# 9. 说说你对原型的理解
 - 是什么：
  1. 显示原型指的是函数身上自带的 prototype 属性, 通常可以将一些书型盒方法添加在显示原型上，可供实例对象继承到

  2. 隐式原型 __proto__ 是对象这种结构上的一个属性，其中包含了创建该对象时，隐式继承到的属性

 - 原型链：创建一个实例对象时，实例对象的隐式原型===创建该对象的构造函数的显示原型，在js中对象的查找规则是先在对象中查找，找不到再去对象的隐式原型上查找，顺着隐式原型一层层往上找，直到找到null为止，这种查找规则我们就叫原型链


 - 可用来实现属性的继承

# 10. 说说js中的继承
 - 是什么：在js中继承指的是让一个子类可以访问父类的属性和方法

 - 继承有哪些方式：
  1. 原型链继承：（1.无法给父类灵活传参  2.多个实例对象共用了同一个原型对象存在属性相互影响）
  2. 构造函数继承：(1.只能继承到父类身上的属性，无法继承到父类原型上的属性)
  3. 组合继承（经典继承）：(1.存在多次父类函数的调用，多造成了性能开销)
  
  4. 原型式继承：（1.因为是浅拷贝，父类中的引用类型在子类之间共用了，会相互影响, 2.子类无法添加默认属性）
  5. 寄生式继承：（1. 同上）
  6. 寄生组合式继承

  7. class 继承

# 11. 说说js中的this
 - 是什么：this是函数在运行过程中自动生成的一个对象，用来代指作用域的指向

 - 绑定规则：
  1. 默认绑定：当函数被独立调用时，函数的this指向window。(函数的词法作用域在哪里，this就指向哪个词法作用域)
  2. 隐式绑定：当函数被一个对象所调用时，函数的this指向该对象
  3. 隐式丢失：当函数调用前有多个对象，函数的this指向最近的对象
  4. 显示绑定：call, apply, bind
  5. new绑定：this指向实例对象

 - 箭头函数：箭头函数中的this是它外层非箭头函数的，指向也按照上述的绑定规则

# 12. new的实现原理
 - 构造函数有返回值，且为引用类型时会覆盖new当中的返回值

# 13. call, apply, bind 原理

# 14. 说说js中的事件模型
  - 什么事件流

  - 分类
 1. DOM0级  onclick (无法控制事件在捕获冒泡哪个阶段执行)
 2. DOM1级  addeventListen （可以控制事件执行在哪个阶段）
 3. IE模型  attachEvent (无法控制事件在捕获冒泡哪个阶段执行)

# 15. 说说typeof和instanceof的区别？
  - typeof
    能判断除了null之外的所有原始类型

  - instanceof
    能判断一个变量是够属于某种类型，是通过原型链来判断的

  - Object.prototype.toString.call(x)

    1. [].toString()  数组版本的toString
    2. Object.prototype.toString.call([])   对象版本的toString
       [].toString()  对象版本的toString

    该方法会让变量 x 调用对象上的toString函数，而toString返回值为 '[object Object]' 类型

  - Array.isArray()

# 16. 说说Ajax的原理
  - 是什么：
    Async Javascript and XML ，是一种异步js和网页交互的技术，可以实现不刷新网页就跟服务器交换数据，更新页面

  - 实现过程
   1. 创建XHR实例对象
   2. 调用实例对象中的open方法与服务器建立连接
   3. 调用实例对象中的send方法发送请求
   4. 监听onreadystatechange事件，通过判断readyState的值来获取到最终的数据
   5. 将数据更新到html页面

# 17. 怎么实现上拉加载下拉刷新？
  1. 监听 touchstart  touchmove  touchend 事件,记录手指移动的距离，大于临界值时实现刷新操作，其中使用 transform: translateY 来添加各处的动画

  2. 根据手指滑动的方向和容器顶部或底部到屏幕的距离来确定此时该执行上拉加载更多 还是下拉刷新

# 18. 防抖节流

# 19. 事件代理
  - 事件委托  （多个子容器需要绑定相同的事件）

# 20. 说说js中的事件循环
 - 是什么
  js引擎在执行js放入过程中会区分同步和异步代码，先执行同步再执行异步，异步中同样按照先执行同步在执行异步的策略，以此往复的循环

  - 异步
    1. 宏任务  script  setTimeout  setInterval  setImmediate  I/O  UI-rendering   postMassage   MessageChannel

    2. 微任务  .then()  nextTick(node)  MutationObserver

  - Event-Loop
   1. 执行同步代码 （也叫宏任务）
   2. 执行微任务 (完毕)
   3. 有需要的话就渲染页面
   4. 执行宏任务 （下一次事件循环的开始）




    









