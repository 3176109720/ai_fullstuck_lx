// // var arr = [1, 2, 3, 4]

// // arr.push(5)
// // arr.pop()
// // arr.unshift(0)
// // arr.shift()

// // // arr.splice(1, 1)   
// // // console.log(arr.slice(1, 2));

// // // console.log(arr);


// // var arr = new Array(4)

// // console.log(arr.length);


// var arr = [
//   [1, 2, 31, 4],
//   [1, 2, 32, 4],
//   [1, 2, 33, 4],
//   [1, 2, 34, 4],
// ]

// // console.log(arr[0]);

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }


var arr = ['a', 'b', 'c', 'd']

// arr.forEach(function(item, index, arr) {
//   arr[index] = item + '1'
// })

var newArr = arr.map(function(item, index, arr) {
  return item + '1'
})

console.log(newArr);
