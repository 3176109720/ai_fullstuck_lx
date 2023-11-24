let obj = {
    name: '李总',
    age: 18,
    a: {
        n: 1
    },
    b: undefined,
    c: null,
    d: function() {},
    e: Symbol('hello'),
    f: {
        n: 100
    }
}

function deepCopy(obj) {
    let objCopy = {} 
    

    return objCopy
}

let obj2 =deepCopy(obj)