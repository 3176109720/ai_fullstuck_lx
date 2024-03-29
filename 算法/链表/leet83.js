var deleteDuplicates = function(head) {
  let cur = head
  // 遍历链表
  while(cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
};