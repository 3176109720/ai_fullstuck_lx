var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr !== null) {
        // 利用解构赋值进行数据交换，并移动
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};