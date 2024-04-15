let b = 2
let str = 'let c = 3'

function foo(s) {
  let a = 1
  eval(s)
  console.log(a, b, c);
}
foo(str)