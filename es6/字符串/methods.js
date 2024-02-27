// let str = '17826864511'
// console.log(str[2]);
// console.log(str.at(2));
// console.log(str.padStart(20, '0'));


let obj = {
  a: 1,
  b: 2
}
// console.log(obj);
let str = JSON.stringify(obj)

console.log(JSON.parse(str));