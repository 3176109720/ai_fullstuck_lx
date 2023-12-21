// set 对象  
// 对象成员是唯一的
// 有长度

// let obj = {}
// let s = new Set([1, 1, 2, 2, 3, 3])
// console.log(s.size);


// let arr = [1, 1, 2, 2, 3]
// let newArr = [...new Set(arr)]
// console.log(newArr);


let s = new Set([1, 2, 3])
// s.add(4)
// s.delete(1)
// console.log(s.has(1));
// s.clear()
// console.log(s);

// s.forEach((value, key, s) => {
//   console.log(value, key, s);
// })

// console.log(s.values());
// for (let value of s.values()) {
//   console.log(value);
// }

// for (let value of s.keys()) {
//   console.log(value);
// }

for (let item of s.entries()) {  // s.entries() === [[1,1], [2, 2], [3, 3]]
  console.log(item);
}
