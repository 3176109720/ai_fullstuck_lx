// var arr = ['a', 'b', 'c', 'd']
// // arr.push('e')
// // arr.pop()
// // arr.unshift(1)
// // arr.shift()

// // arr.splice(1, 1)
// arr.splice(1, 0, true)
// arr[3] = 'cc'
// console.log(arr);



// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] + 1
// }
// arr.forEach(function(item, index, arr) { // 回调
//   console.log(item, index, arr);
// })
// console.log(arr);

var arr = ['a', 'b', 'c', 'd']
var arr2 = [1, 2, 3]

// var newArr = arr.map(function(item, index, arr) {
//   return item + 2
// })

// console.log(arr.indexOf('a', 2));
// console.log(arr.includes('a'));
// console.log(arr.lastIndexOf('b'));

// console.log(arr.concat(arr2));
console.log([].concat(arr, arr2));

