//用闭包的方式来实现单例模式

// function Storage(name) {
//     this.name = name
// }

// const Helper = (function (name) {
//     let instance = null
//     return function () {
//         if (!instance) {
//             instance = new Storage(name)
//         }
//         return instance
//     }
// })()
// let p1 = new Helper('li')
// let p2 = new Helper('li')
// console.log(p1 === p2);
// //就成功的实现了单列模式。！！！！！！！！

// function Storage() {
//     this.name = '百度'
// }

// const help = (function () {
//     let instance = null
//     return function () {
//         if (!instance) {
//             instance = new Storage()
//         }
//         return instance
//     }
// })()

// let p1 = new help()
// let p2 = new help()
// console.log(p1 === p2);

// function Storage() {
//     this.name = '百度'
// }

const help = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new Storage()
        }
        return instance
    }
})()
let p1 = new help()
let p2 = new help()
console.log(p1 === p2);

