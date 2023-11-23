function myInstance(L, R) {
    let left = L._proto_
    let right = R.prototype

    while(left !== null) {
        if (left === right) {
            return true
        }
        left = left._proto_
    }
    return false
}

console.log(myInstance({}, Array));
console.log(myInstance([], Array));
