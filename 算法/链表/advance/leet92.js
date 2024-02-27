


var reverseBetween = function(head, left, right) {
  if (left === right) return head 
  const dummy = new ListNode()
  dummy.next = head
  // 把链表left, right截取
  let lNode = dummy;
  let rNode = dummy
  for (let i = 0; i < left - 1; i++) {
    lNode = lNode.next;  // 左侧截取之前的节点
  }

  for (let i = 0; i < right; i++) {
    rNode = rNode.next;   // 右侧截取的节点
  }
  let r = rNode.next
  rNode.next = null
  let l = lNode.next

  const res = reverseList(lNode.next)
  lNode.next = res
  l.next = r

  return head
};

var reverseList = function(head) {
  let pre = null
  let cur = head
  while (cur) {
    let nextNode = cur.next
    cur.next = pre
    pre = cur
    cur = nextNode
  }
  return pre
};