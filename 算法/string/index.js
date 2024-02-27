// let str = 'abcdefg'
// // str[2] = 'C'
// // str.charAt(4)
// // str.concat('mn')
// // str + 'mn'

// let arr = str.split('')
// arr.splice(4)
// let newStr = arr.join('')

// console.log(newStr);

// let str = '2023年10月31日'  // 2023/10/23
// console.log(str.split('年')[1].split('月')[1].split('日'));

// const str = 'juejin'
// const res = str.split('').reverse().join('')
// console.log(res);


const str = 'yesey'

// function ispalindrome(s) {
//   const res = s.split('').reverse().join('')
//   return s === res
// }

// function ispalindrome(s) {
//   const stack = []
//   for (let i = 0; i < s.length; i++) {
//     stack.push(s[i])
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== stack.pop()) {
//       return false
//     }
//   }
//   return true
// }

function ispalindrome(s) {
  const len = s.length
  let j = len - 1

  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[j - i]) {
      return false
    }
  }
  return true
}
