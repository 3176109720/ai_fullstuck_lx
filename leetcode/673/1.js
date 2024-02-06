var findNumberOfLIS = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1);
    const cnt = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (nums[i] === nums[i - 1]) {
            dp[i] = dp[i - 1];
            cnt[i] = cnt[i - 1];
            continue;
        }
        for (let j = 0; j < i; j++) {
            if (nums[j] >= nums[i]) continue;
            let t = dp[j] + 1;
            if (t >= dp[i]) {
                if (t > dp[i]) cnt[i] = 0;
                dp[i] = t;
                cnt[i] += cnt[j];
            }
        }
    }
    let m = Math.max(...dp);
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] === m) {
            res += cnt[i];
        }
    }
    return res;
};