var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(); // 哨兵节点
    let cur = dummy;
    let carry = 0; // 进位
    while (l1 || l2 || carry) {
        if (l1) carry += l1.val; // 节点值和进位加在一起
        if (l2) carry += l2.val; // 节点值和进位加在一起
        cur = cur.next = new ListNode(carry % 10); // 每个节点保存一个数位
        carry = Math.floor(carry / 10); // 新的进位
        if (l1) l1 = l1.next; // 下一个节点
        if (l2) l2 = l2.next; // 下一个节点
    }
    return dummy.next; // 哨兵节点的下一个节点就是头节点
};