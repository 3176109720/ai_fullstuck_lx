// // function foo(str) {
// //   eval(str) // var b = 2
// //   var a = 1

// //   console.log(a, b);
// // }
// // foo('var b = 2')


// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// }
// // obj.a = 2
// // obj.b = 3
// // obj.c = 4

// with(obj) {
//   a = 2,
//   b = 3,
//   c = 4
// }

// console.log(obj);



function foo(obj) {
  with (obj) {
    a = 2
  }
}

var o1 = {
  a: 3
}
var o2 = {
  b: 4
}

foo(o2)
console.log(a);


