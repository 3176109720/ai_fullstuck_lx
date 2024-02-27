// let arr = [1, 1, 2, 3, 3]
// let obj = {
//   1: 1,
//   2: 2,
//   3: 3
// }



// let set = new Set([1, 1, 2, 2, 3, 4])
// set.add(5)
// console.log(set);



// 数组去重
// var arr = [1, 2, 1, 1, '1']

// function unique(arr) {
//   // return Array.from(new Set(arr))
//   return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)]
// console.log(unique(arr));




let set = new Set([1, 1, 2, 2, 3, 4])
// set.delete(1)
// console.log(set);

// set.forEach((item, index, set) => {
//   console.log(item, index, set);
// })

for (let item of set.entries()) {
  console.log(item);
}