// let arr = ['a', 'b', 'c', 'd']
// // 数组上的map方法，用于将数组中的每一项修饰完毕后存入新的数组并返回
// let newArr = arr.map((item, index, arr) => { 
//   return item + 1
// })
// console.log(newArr);




// map 对象
// object数据结构中，key只能是字符串


// let arr = {}
// let obj = {
//   a: 1
// }
// obj[arr] = 2


let m = new Map();
// m.set('a', 1);
// console.log(m.get('a'));
// m.delete('a')
// console.log(m.has('a'));
// console.log(m.size);
m.set([], 1)
m.set({}, 2)
m.set(true, 3)
// console.log(m);

// m.forEach((val, key, m) => {
//   console.log(val, key);
// })

// for (let val of m.values()) {
//   console.log(val);
// }

// for (let key of m.keys()) {
//   console.log(key);
// }

console.log( m.entries());
for (let item of m.entries()) {
  console.log(item);
}