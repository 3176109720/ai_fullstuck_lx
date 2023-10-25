// var arr = ['a','b','c','d']
// arr.push('e')              //尾部添加
// arr.pop()                  //尾部删除
// arr.unshift(1)             //头部增加
// arr.shift()                //头部删除

// arr.splice(1)              //从一号下标开始移除
// arr.splice(1,1)            //只删除一号下标
// arr.splice(1,0,true)       //
// arr[3]='cc'                //将中括号内的元素更改
// console.log(arr);

// for (var i = 0;i< arr.length; i++){
//     arr[i] =arr[i]+1
// }
// arr.forEach(function(){ //回调
//     console.log(item,index,arr)
// })

// console.log(arr);

var arr = ['a','b','c','d']
var arr2 = [1,2,3]

// var newArr = arr.map(function(item,index,arr){
//    return item + 2
// })

// console.log(arr.indexOf('a',2))//可以设置从第几个下标开始查找，没有则返回-1
// console.log(arr.includes('a'));
// console.log(arr.lastIndexOf('b'));//

// console.log(arr.concat(arr2));//数组拼接
console.log([].concat(arr,arr2));
