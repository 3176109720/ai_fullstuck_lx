function instanceOF(L, R) {
  let left = L.__proto__
  let right = R.prototype

  while (left !== null) {
    if (left === right) return true

    left = left.__proto__
  }

  return false
}

console.log(instanceOF([], Array)); // true
console.log(instanceOF([], Object)); // true