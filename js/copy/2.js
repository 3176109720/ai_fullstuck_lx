// // let a = {name: '俊熙'}
// // let b = Object.create(a)
// // a.name = '军儿'
// // console.log(b.name);

// let a = {
//   name: '俊熙', 
//   like: {
//     n: 'coding'
//   }
// }
// let b = Object.assign({}, a)
// a.like.n = 'running'

// console.log(b);


let arr = [1, 2, 3, {a: 10}]
// let newArr = [].concat(arr)
// let newArr = arr.slice(0)
// let newArr = [...arr]
let newArr = arr.toReversed().reverse()
arr[3].a = 100
console.log(newArr);