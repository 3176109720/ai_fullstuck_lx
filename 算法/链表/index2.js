// 数组 O(n)    增删元素
// 链表 O(1)


// 读取值
// 数组 O(1)
// 链表 O(n)

function ListNode(val) {
  this.val = val;
  this.next = null
} 

const index = 10
let node = new ListNode()

for (let i = 0; i < index; i++) {
  node = node.next
}