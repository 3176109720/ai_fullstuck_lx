// var a = 1

// function foo() {
//     console.log(this.a);
// }

// function bar() {  // bar 的词法作用域是window
//     var a = 2
//     foo()  // foo 是在bar的作用域中调用，但是此时必须要直到bar的词法作用域是window
// }

// bar()  



function foo() {  // [[scope]]

    function bar() {
        console.log(this);
    }

    function baz () {
        bar()
    }

    baz()
}

foo()