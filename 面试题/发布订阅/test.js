// let b = 'hello'

// let obj = {
//   a: 1
// }

// obj[b] = 2


let a = () => {}
let arr = [() => {}, () => {}, () => {}]

const b = arr.filter(x => x !== a)

console.log(b);

