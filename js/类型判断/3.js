// let str = 'hello'
// console.log(str instanceof String);  //false     instanceof只能判断引用类型

let obj = {}
let arr = [1, 2]
let date = new Date()
let fn = function() {}

// console.log(obj instanceof Object);  //true
console.log(arr instanceof Array);   //true  arr._proto_=== Array.prototype
console.log(arr instanceof Object);  //true  arr._proto_._proto_._proto_=== Object.prototype

// console.log(date instanceof Date);   //true
// console.log(fn instanceof Object);   //true



function foo(obj) {
    if (obj instanceof Object) {
        // xxx
    }
}

foo([])