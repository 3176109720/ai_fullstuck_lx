/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0;
      let res = Infinity, sum = 0;
      while (l <= r && r <= nums.length) {
          if (sum >= target) {
              res = Math.min(res, r - l);
              sum-= nums[l++]
          } else {
              sum += nums[r++];
          }
      }
      return res === Infinity ? 0: res;
  
  };