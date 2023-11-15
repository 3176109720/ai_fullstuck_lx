// 数组降维扁平化
var arr = [1, [2, [3.4]]]//     ->   [1.2.3.4]

// for (var i = 0; i < arr.length; i++) {
//     let res = []
//     if (!Array.isArray(arr[i])) {
//         res.push(arr[i])
//     }else{
//         for (var j = 0; j < item.length; j++) {
//             if (!Array.isArray(item[j])) {
//                 res.push(arr[i])
//             }else{}
//         }
//     }
// }

var newArr = arr.flat(Infinity)  // Infinity : 无穷大

console.log(newArr);