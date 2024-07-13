//什么是单例模式，单例模式就是不管new多少次这个构造函数，只得到一个相同的实例对象
// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     static getInfo(name) {
//         if (!Person.instance) {
//             Person.instance = new Person(name)
//         }
//         return Person.instance
//     }
// }
// let p1 = Person.getInfo('li')
// let p2 = Person.getInfo('li')
// console.log(p1 === p2);
//这是通过用一个函数装一下然后，用一个属性来存一下唯一被new的实例，
//调用这个构造函数就能得到一个实例对象

//构造函数的写法
// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     static getInfo(name) {
//         if (!Person.instance) {
//             Person.instance = new Person(name)
//         }
//         return Person.instance
//     }
// }

// let p1 = Person.getInfo('li')
// let p2 = Person.getInfo('li')
// console.log(p1 === p2);
//为什么不写static不可以呢

// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     static getInfo(name) {
//         if (!Person.instance) {
//             Person.instance = new Person(this.name)
//         }
//         return Person.instance
//     }
// }

// let p1 = Person.getInfo('li')

// let p2 = Person.getInfo('li')
// console.log(p1 === p2);
// // 用一个static静态的方法就可以去完成。


class Person {
    constructor(name) {
        this.name = name
    }
    static getInfo(name) {
        if (!Person.instance) {
            Person.instance = new Person(name)
        }
        return Person.instance
    }
}
let p1 = Person.getInfo('li')
let p2 = Person.getInfo('li')
console.log(p1 === p2);
//这样一个单例模式就完成了。
//这是用class类的写法，这是es6新增的属性。



