var sortedArrayToBST = function(nums) {
    if(!nums.length) {
        return null;
    }
    const headIndex = Math.floor(nums.length / 2);
    const head = new TreeNode(nums[headIndex]);
    let temp = head;
    let left = headIndex - 1;
    let right = headIndex + 1;
    if(left >=0) {
        head.left = sortedArrayToBST(nums.slice(0, headIndex));
    }
    if(right < nums.length) {
        head.right = sortedArrayToBST(nums.slice(right));
    }
    return head;
};