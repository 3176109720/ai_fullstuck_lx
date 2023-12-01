# 基本数据类型之间的转换
1. 转布尔
2. 转数字
3. 转字符串
4. 转对象


# 对象转原始类型     obj.toString()     obj.valueOf()

toString() 在js中有多个版本
- {}.toString()  //  "[object class]"
- 数组的toString()会将数组中的所有元素转换为字符串并以逗号拼接
- 函数的toString()会将整个函数体以字符串形式返回
- Date的toString()会将这个Date以字符串形式返回



## 对象转字符串   Toprimitive(obj, String)
1. 判断obj是基本类型，则返回
2. 否则 调用 toString 方法，如果得到原始类型，则返回
3. 否则 调用 valueOf 方法，如果得到原始类型，则返回
4. 否则 报类型错误

## 对象转数字   Toprimitive(obj, Number)
1. 判断obj是基本类型，则返回
2. 否则 调用 valueOf 方法，如果得到原始类型，则返回
3. 否则 调用 toString 方法，如果得到原始类型，则返回
4. 否则 报类型错误


# 一元运算符   +

# 二元运算符
v1 + v2 === ToPrimitive(v1) + ToPrimitive(v2)

lprim = ToPrimitive(v1) 
rprim = ToPrimitive(v2)

v1 + v2 === lprim + rptim

1. 如果 lprim 是字符串 或者 rprim 是字符串，则返回将不是字符串的一方转化为字符串，再进行拼接
2. 否则 都转成number 进行加法运算

{} + []  // {} 会认为是声明的对象不会进行运算