// 5!  ==  5 * 4 * 3 * 2 * 1

function mul(n) { // mul 它就是可以计算阶乘
  // n! = n * (n-1)!
  if (n == 1) {
    return 1
  }
  return n * mul(n - 1)
}

console.log(mul(5));

// mul(5) == 5 * mul(4)
// mul(4) == 4 * mul(3)
// mul(3) == 3 * mul(2)
// mul(2) == 2 * mul(1)
// mul(1) == 1