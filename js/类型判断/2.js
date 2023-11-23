function add(x, y) {
    if (typeof x === 'number' && typeof(y)=== 'number') {  // typeof 判断数据原始类型
        return x + y
    }
}
// add('hello', 2)


// console.log(typeof 'hello');  //string
// console.log(typeof 123);  // number
// console.log(typeof true);  // 布尔 boolean
// console.log(typeof undefined);  // undefined
// console.log(typeof Symbol(1));  //symbol
// console.log(typeof 123n);  //bigint
// console.log(typeof null);  ///////////////////////////////////// 存在bug，被判断为object 

// console.log(typeof ({}));   // objeck
// console.log(typeof ([]));   // object
// console.log(typeof (new Date()));  //object
// console.log(typeof (function () {}));   // object


