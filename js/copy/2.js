// let a = {
//     name: '雨程'
// }
// let b = Object.create(a)
// a.name = '涛哥'
// console.log(b.name);


// let a = {
//     name: '雨程',
//     like: {
//         n: 'coding'
//     }
// }
// let b = Object.assign({}, a)
// a.name = '涛哥'
// a.like.n = 'running'
// console.log(b);


let arr = [1, 2, 3, {n: 10}]
// let newArr = [].concat(arr)
// arr.push(4)
// arr[0] = 10
// arr[3].n =100

// let newArr = [...arr]
// arr[3].n = 100

let newArr = arr.toReversed().reverse()
arr[3].n = 100
console.log(newArr);