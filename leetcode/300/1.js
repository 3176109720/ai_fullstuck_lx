/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n=nums.length;
    let arr=new Array(n);
    arr.fill(1);
    let max=1;
    for(let i=1;i<n;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                arr[i]=Math.max(arr[j]+1,arr[i]);
            }
        }

        max=Math.max(max,arr[i]);
    }
    return max;
};
