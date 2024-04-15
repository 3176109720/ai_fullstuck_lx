var a = 1
function b() {
  console.log(a)  // undefined
  let a = 2
  console.log(a)  // 2
}
b()