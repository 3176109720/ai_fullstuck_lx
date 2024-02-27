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



