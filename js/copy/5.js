// 手动实现深拷贝
let obj = {
  name: '啊伟',
  age: 18,
  like: {
    type: 'coding'
  },
  a: undefined,
  b: null,
  c: function() {},
  d: {
    n: 100
  },
  e: Symbol('hello'),
}
// obj.c = obj.d
// obj.d.m = obj.c

function deepCopy(obj) {
  let objCopy = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] instanceof Object) { // obj[key] 是引用类型
        objCopy[key] = deepCopy(obj[key])
      } else {
        objCopy[key] = obj[key]
      }
    }
  }
  return objCopy
}

console.log(deepCopy(obj));