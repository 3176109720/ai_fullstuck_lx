// function Person() {
//   this.name = '张三'
//   return []
// }
// let p = new Person()
// console.log(p);


let obj = {
  a: 1
}
function foo(x, y) {
  console.log(this.a, x + y);
}

foo.call(obj, 1, 2)
foo.apply(obj, [2, 3])

let bar = foo.bind(obj, 3)
bar(5)
