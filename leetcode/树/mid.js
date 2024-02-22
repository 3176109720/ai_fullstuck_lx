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
  res.push(root.val)
  let resR = preOrder(root.right)

  return [...resL, ...res, ...resR]
}

console.log(preOrder(root));