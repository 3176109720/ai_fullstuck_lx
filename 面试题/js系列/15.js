// let a = Symbol('a')
// let b = 123131n
// console.log(typeof b);


let c = {}

function instance_of(L, R) {
  L = L.__proto__
  R = R.prototype

  while (L!== R) {
    if (L === null) return false
    L = L.__proto__
  }
  return true
}

console.log(instance_of(c, Array));  // c.__proto__ === Array.prototype 
console.log(instance_of(c, Object)); // c.__proto__.__proto__ === Object.prototype