let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


// var removeNthFromEnd = function (head, n) {
//   const dummy = new ListNode()
//   dummy.next = head

//   let cur = dummy
//   let len = 0

//   // len - n  + 1  == 倒数n
//   while (cur.next) {  // 0   1 2 3 4 5
//     len++
//     cur = cur.next
//   }

//   let pre = dummy
//   for (let i = 0; i < len - n; i++) {
//     pre = pre.next
//   }

//   if (pre.next) {
//     pre.next = pre.next.next
//   }

//   return dummy.next
// };

var removeNthFromEnd = function (head, n) {
  // len    m = len - n + 1     pre = m - 1
  const dummy = new ListNode()
  dummy.next = head

  let fast = dummy
  let slow = dummy

  // 快指针先走n步
  while (n !== 0) {
    fast = fast.next
    n--
  }

  // 快慢指针一起走
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next
  return dummy.next
}

console.log(removeNthFromEnd(list, 2));