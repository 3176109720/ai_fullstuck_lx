# typeof
1. 可以准确的判断除null之外的原始类型
2. 可以判断 function


# instanceof
1. 只能判断引用类型
2. 通过原型链来查找判断


# Object.prototype.toString.call(str)
- 如果 this 值未定义， 返回 “[object Undefined]”。
- 如果 this 值为 null， 返回 “[object Null]”。
- 设 O 是ToObject(this)，如果你传的是原始类型，那就会调用ToObject将原始类型转换成对象
- 设 class 是 O 的 [[Class]] 内部属性的值。
- 返回 String 值，该值是连接三者字符串 “[object ”、“class“ 和 “]”的结果 

- xxx.call(原始值) 为什么不报错？？？？？
- toString通过读取数据结构内部属性来读取到数据的类型 class


# Array.isArray()

let arr = []
