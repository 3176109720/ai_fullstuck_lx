let root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    left: null,
    right: {
      val: 'F'
    }
  }
}


function preOrder(root) {
  if (!root) return []
  let res = []

  let resL = preOrder(root.left)
  let resR = preOrder(root.right)
  res.push(root.val)

  return [...resL, ...resR, ...res]
}

console.log(preOrder(root));