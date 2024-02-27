var obj = {
  a: 1
}
function foo(x, y) {
  console.log(this.a, x + y);
}
// foo.call(obj, 1, 2)

Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('myCall is not a function');
  }
  let args = [...arguments].slice(1) // Array.from(arguments).slice(1)

  context.fn = this
  let res = context.fn(...args)  // 触发this隐式绑定规则
  delete context.fn
  return res
}

foo.myCall(obj, 1, 2)
