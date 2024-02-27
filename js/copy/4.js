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
obj.c = obj.d
obj.d.m = obj.c

// console.log(JSON.parse(JSON.stringify(obj)));

let newObj = JSON.parse(JSON.stringify(obj))

console.log(newObj);
