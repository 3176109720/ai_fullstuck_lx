// const num = 5   // 00000101
// const lNum = num << 2  // 00010100
// const rNum = num >> 1
// console.log(rNum);

// 如何实现一个高效率的整数的乘法和除法
function multiply(x, y) {
  let result = 0
  while (y > 0) {
    if (y & 1) { // y二进制的最低位是不是1
      result += x
    }
    x = x << 1
    y = y >> 1
  }

  return result
}

// 000000010100
// 000000000001  &   0001   ===   0
  
// console.log(multiply(5, 4)); 


function divide(x, y) {
  let result = 0
  

  return result
}

console.log(divide(15, 3));  // 5