var a = 1
//a = 'hello'


function foo(){ //函数 调用前不编译
    //var a = 2 //打印2 
    console.log(a);  //打印a=1
}
//console.log(a) //打印1
foo() //被调用执行
// console.log(a)  //打印1 全局

