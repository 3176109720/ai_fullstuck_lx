/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let m = matrix.length;
        let n = matrix[0].length;
        let dp = matrix;
        for (let i=0;i<m;i++){
            for (let j=0;j<n;j++){
                dp[i][j] = Number(dp[i][j])
            }
        }
        let ans = 0
        for (let i=0;i<m;i++){
            for (let j=0;j<n;j++){
                if (i!==0 && j!==0 && dp[i][j]===1){
                    dp[i][j] = Math.pow( Math.sqrt(Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])) +1,2)
                }
                ans = Math.max(ans,dp[i][j]);
            }
        }
    
        return ans;
    };