Function.prototype.a = () => alert(1)
Object.prototype.b = () => alert(2);

function A() { }  // A.__proto__ ===  Function.prototype

const a = new A();

A.a(); // 
a.b(); // 2