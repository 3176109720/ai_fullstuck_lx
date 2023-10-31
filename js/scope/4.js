/*
if(1){
    let a = 1
}

console.log(a);*/
/*
let b = 3
{
    const a=2
}
console.log(a); //报错*/

let a = 1
if(true){
    console.log(a); //暂时性死区
    let a = 2 
}