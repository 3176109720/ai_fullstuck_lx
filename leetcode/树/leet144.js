var preorderTraversal = function(root) {
  if (!root) return []
  // 合理安排入栈和出栈的顺序
  const res = [] 
  const stack = []
  stack.push(root)

  while(stack.length > 0) {
    const cur = stack.pop()
    res.push(cur.val)
    
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }

  return res
}