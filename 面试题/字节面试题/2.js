// 




function foo() {
  let a = 1, b = 2, c = 3, d = 4;

  return function() {
    console.log(a + b);
  }

}
let bar = foo()
bar()