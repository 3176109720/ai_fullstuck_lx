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

// async === return new Promise((resolve, reject) => {})
async function foo() {
    await xq()
    await marry()
    baby()
}
foo()
