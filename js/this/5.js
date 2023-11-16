// function foo() {}

// var foo = function() {}

// var obj = {
//     a: 1
// }

// var foo = () => {
//     console.log(this.a);
// }
// foo.call(obj)


// var bar = function() {
//     console.log(this.a);
// }
// bar.call(obj)

var obj = {
    a: 1
}
function foo() {
    var bar = () => {
        console.log(this);
    }
    bar()
}
foo.call(Obj)