function instanceOf(L, R) {
    let left = L.__proto__
    let right = R.prototype
    while (left != null)//原型链的尽头就是null，这也是null的使用场景。
    {
        if (left == right) return true
        left = left.__proto__
    }
    return flase
}//这个instanceof也太简单了一点吧。



function instanceOf(L, R) {
    let left = __proto__
    let right = prototype
    while (left != null) {
        if (left == right) return true
        left = left.__proto__
    }
    return false
}
