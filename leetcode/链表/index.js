let arr = [1, 2, 11, 3, 4, 5, 6, 7, 8]  // 有序，线性， 连续

// {
//   val: 1,  // 数据域
//   next: {  // 指针域
//     val: 2,
//     next: {
//       val: 3,
//       next: ...
//     }
//   }
// }

// {
//   val: 1,
//   next: {}
// }


function ListNode(val) {
  this.val = val;
  this.next = null
}

let node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const target = node1.next
node1.next = target.next

// node
// let node3 = new ListNode(3)
// node3.next = node1.next
// node1.next = node3



// 数组中增加或删除一个元素会导致n个元素位置移动，时间复杂度为O(n)
// 链表中增加或删除一个元素时间复杂度为O(1)