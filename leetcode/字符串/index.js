let str = 'hello'

// let res = ''
// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i]
// }
// console.log(res);
// console.log(str[1]);
// console.log(str.at(1));

const s = str.split('').reverse().join('')   // 会影响原数组

console.log(s);
