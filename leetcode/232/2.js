// 手写bind  args 收集了所有的参数  rest 运算符
// [...args]  
Function.prototype.myBind = function(context, ...args) {
    // arguments.pop()
    // this -> context 
    // this -> context?
    // this -> func 
    if(typeof this !== 'function') {  // 校验
        throw new TypeError("error")
    }
    context = context || window 
    const that = this  // func  dn  提供了一个上下文  原函数对象是谁？
    return function fn(...innerArgs) {
        // this 被 context 覆盖
        return that.apply(context, [...args, ...innerArgs])
    }
}
let obj = {
    name: '陈总'
}
const bindedFn = func.bind(obj,1, 2, 3) 
bindedFn(4, 5)