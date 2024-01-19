var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)
      let len = nums.length
      let i = 0
      let result = 0
      while (i < len) {
        result = result + nums[i]
        i = i + 2
      }
      return result
    };