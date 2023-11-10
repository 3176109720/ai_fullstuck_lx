// js 在 es6 后才有的类
// 类和对象与生命区别
// 类是抽象的，定制的
// 对象是具体的
class SingleDog{
    constructor() {

    }
    // static instance = null  //在js中不声明也能用
    // 静态方法 属于类上的方法
    static getInstance() {
        // console.log('类的方法');
        // 需要返回实例
        if(!SingleDog.instance) {
            // 仅实例化一次
            SingleDog.instance = new SingleDog()

        }
        return SingleDog.instance
    }
    // 公有方法 属于实例上的
    show() {
        console.log('单身贵族');
    }
}
// 设计模式 一个类只实例化一次 封装
// 第一次调用 new ， 第二次就不实例化， 直接返回实例
// new 角度，搞不定？  &{}
// 总领导 弹窗 
const s1 = new SingleDog.getInstance() // 生成对象 -> 拿到对象  
const s2 = new SingleDog.getInstance()
// 如何 让它们相等
// console.log(s1 === s2);  // false  内存中不一样
console.log(SingleDog.getInstance());