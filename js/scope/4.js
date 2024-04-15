// if (1) {
//   let a = 1
// }

// for (var i = 0; i < 5; i++) {
//   let a = 2
// }


// let b = 3
// {
//   const a = 2
// }
// console.log(a);


let a = 1

if (true) {
  console.log(a);  // 暂时性死区
  let a = 2
}
