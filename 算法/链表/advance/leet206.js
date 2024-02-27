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


var reverseList = function(head) {
  let cur = head
  const dummy = new ListNode()
  
  let nextNode = null
  while (cur != null) {
    dummy.next = cur
    cur.next = nextNode
    nextNode = cur
    cur = cur.next
  }
  return dummy.next
  
};

