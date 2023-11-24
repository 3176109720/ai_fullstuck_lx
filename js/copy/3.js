let obj = {
    name: '李总',
    age: 18,
    a: {
        n: 1
    },
    b: undefined,
    c: null,
    d: function() {},
    e: Symbol('hello'),
    f: {
        n: 100
    }
}

// console.log(obj);
// console.log(JSON.stringify(obj));   // 将对象转变为字符串

// let str = JSON.stringify(obj)
// console.log(JSON.parse(str));    // 将被花括号包裹的字符串转化为对象

// let obj2 = JSON.parse(JSON.stringify(obj))  // 可以实现深拷贝
// obj.n = 2
// console.log(obj2);

obj.e = obj.f
obj.f.n = obj.e

console.log(obj);