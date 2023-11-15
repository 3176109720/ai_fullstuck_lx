// 5!
function mul(n) {
// function mul(n) {
//     let res = 1
//     for (var i = 1; i <= n; i++) {
//         res = res * i
//     }
//     return res
// }
// mul(5)//120
// console.log(mul)
  if(n<=1)
{
    return 1
}
  return n * mul(n - 1)

}

console.log(mul(5));  //  120

// mul(5) == 5 * mul(4)
// mul(4) == 4 * mul(3)
// mul(3) == 5 * mul(2)
// mul(2) == 4 * mul(1)
// mul(1) == 1


// 找出口
// 找入口