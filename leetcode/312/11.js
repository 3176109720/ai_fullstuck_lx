function maxCoins(nums) {
    let n = nums.length;
    nums.unshift(1);
    nums.push(1);
    let dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));

    for (let len = 1; len <= n; len++) {
        for (let i = 1; i <= n - len + 1; i++) {
            let j = i + len - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + dp[k + 1][j] + nums[i - 1] * nums[k] * nums[j + 1]);
            }
        }
    }

    return dp[1][n];
}
