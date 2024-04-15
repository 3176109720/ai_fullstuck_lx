let obj = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5,
      left: {
        val: 6
      }
    }
  },
  right: {
    val: 3,
    right: {
      val: 4,
    }
  }
}

var rightSideView = function(root) {
  let res = []

  function dfs(root, n) {
    if (!root) return
    console.log(root.val);

    if (res.length == n) {
      res.push(root.val);
    }
    dfs(root.right, n + 1)  // 深度优先
    dfs(root.left, n + 1)
  }
  dfs(root, 0)
  return res 
};

console.log(rightSideView(obj));