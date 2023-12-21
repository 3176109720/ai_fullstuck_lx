// let a = 1, b = 2, c = 3;

// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c);

let arr = [1, [3, [5, 7]]]

// let a = arr[0]
// let b = arr[1][0]
// let c = arr[1][1][0]
let [a, [b, [c, d = 6]]] = arr
console.log(a, b, c, d);


