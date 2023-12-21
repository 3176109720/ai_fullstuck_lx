// function foo(a, b) {
//   return a - b
// }
// foo(1, 2)

function bar(a, ...args) {
  // console.log(arguments[0]);
  console.log(args);
}
// bar(1, 3, 5)

console.log(bar.toString());