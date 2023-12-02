function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('涛哥相亲了');
            resolve('相亲成功')
        }, 3000)
    })
}

function marry() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log('涛哥结婚了');
        resolve()
    }, 2000)
    })
}   

function baby() {
    setTimeout(() => {
        console.log('小小涛');
    }, 1000)
}

xq()
.then((res) => {  // .then 自己就会返回一个promise对象
    console.log(res);
    return marry()
})
.then(() => {
    baby()
})