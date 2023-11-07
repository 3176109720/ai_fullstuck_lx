# 作用域
1. js 是弱类型的编程语言     //创建时不声明变量类型       强类型的编程语言    //创建时声明变量类型
2. 执行代码之前是需要先编译的

# 编译
1. 找到某个域当中的有效标识符


# 执行
1. 变量的查找会先从内到外的作用域中查找,不能从外到内

# 全局作用域

# 函数作用域

# 块级作用域
1. var 声明的变量存在声明的提升，提上到当前作用域的顶峰
2. 函数声明会整体提升
3. let + {} 会形成块级作用域   
4. const + {} 也会形成块级作用域          

# let
1. 不会声明提升
2. 不能重复声明同一变量

# const
1. 不会声明提升
2. 不能重复声明同一变量
3. 声明的变量不能被修改

# 欺骗词法作用域
1. eval() 让原本不属于这里的代码变成就是写在这里的
2. with 当修改对象中不存在的属性时，该属性会泄漏到全局成为全局变量