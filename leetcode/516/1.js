/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let length = s.length
     if (!length) {
       return 0
     }
     let dp = Array.from({
       length
     }, x => Array.from({
       length
     }, y => 0))
     for (let i = 0; i < length; i++) {
       dp[i][i] = 1
     }
     for (let i = length - 1; i >= 0; i--) {
       for (let j = i + 1; j < length; j++) {
         if (s[i] === s[j]) {
           dp[i][j] = dp[i + 1][j - 1] + 2
         } else {
           dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
         }
       }
     }
     return dp[0][length - 1]
   };