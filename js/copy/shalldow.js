let obj = {
    name: '涛哥',
    age: 18,
    like: {
        n: 'reading'
    }
}
let arr = [1, 2, 3, {a: 1}, undefined, null]
function shalldowCopy(obj) {
    // 不是引用类型就不拷贝
    if (!(obj instanceof Object)) return  //  if (typeof obj !== 'object' || obj !== null) return
 
    // 如果形参obj是数组，就创建对象，如果是对象，就创建对象
    let ObjCopy = obj instanceof Array ? [] : {}

   for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            ObjCopy[key] = obj[key]   // objCopy[0] = obj[0]
        }
    }
    return ObjCopy
}

let newObj = shalldowCopy(arr)
arr[3].a = 2

console.log(newObj);