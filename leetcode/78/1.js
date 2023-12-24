var subsets = function(nums) {
    let outArray=[]; 
    function recursion(index,selectNum){
        outArray.push(selectNum);
        for(let i=index;i<nums.length;i++){
            recursion(i+1,[...selectNum,nums[i]]);
        }
    }
    recursion(0,[]);
    return outArray;
};