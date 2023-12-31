var minCostClimbingStairs = function(cost) {
    let dp = [cost[0], cost[1]]
        for (let i = 2; i < cost.length; i++) {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
        }
        return Math.min(dp.at(-1), dp.at(-2))
    };