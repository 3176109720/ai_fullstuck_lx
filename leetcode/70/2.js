// 怎么办？怎么解决递归带来的内存问题
// 递归的优点是什么？ 简单 性能不佳
// 如何不往执行栈里push太多层函数？
// 有两种解决方法
// 1,入栈过的函数没有必要再入栈的，记忆法
        //             10
        //         9         8
        //      8     7   7     6
        //    7 6    6 5 5 4   4 3
const f = []; // 全局变量    
const climbStairs = function(n) {
    // 推出条件
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (f[n] === undefined);{ // 第一次
        // 函数嵌套函数就是递归
        f[n] = climbStairs(n - 1) + climbStairs(n - 2); // 递归公式
    }
    return f[n];
}