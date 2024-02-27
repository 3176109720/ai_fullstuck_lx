const coins = [1, 2, 5], amount = 110

// c1  c2  c3  c4  ... cn    f(x) = x元的最少硬币个数

// f(11) = 
// f(11 - c1) + 1
// f(11 - c2) + 1
// f(11 - c3) + 1
// ...
// f(11 - cn) + 1

// f(11) = Math.min(f(11 - c1)+1, f(11 - c2)+1, ..., f(11 - cn)+1,)
// f(0) = 0

var coinChange = function(coins, amount) {
  // 每个目标金额对应的最少硬币个数
  const f = [] 
  f[0] = 0
  
  for (let i = 1; i <= amount; i++) { // 4
    f[i] = Infinity  // 不同金额的最小硬币个数

    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) { // 这个硬币能用
        f[i] = Math.min(f[i], f[i - coins[j]] + 1)
      }
    }
  }

  return f[amount] === Infinity ? -1 : f[amount]
};

console.log(coinChange(coins, amount));