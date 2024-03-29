const s = "abc abcbb"
// 输出: 3 

var lengthOfLongestSubstring = function(s) {
  let i = 0, res = 0
  for (let j = 0; j < s.length; j++) {
    let index = s.slice(i, j).indexOf(s[j]) // 'abc'  a
    if (index === -1) {
      res = Math.max(res, j - i + 1)
    } else {
      i = i + index + 1
    }
  }
  return res
};

console.log(lengthOfLongestSubstring(s));