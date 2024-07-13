// function red() {
//     console.log('红灯亮');
// }
// function yellow() {
//     console.log('黄灯亮');
// }
// function green() {
//     console.log('绿灯亮');
// }


// function light(cb, wait) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             cb()
//             resolve()
//         }, wait)
//     })

// }

// function lightStep() {
//     Promise.resolve().then(() => {
//         return light(red, 3000)
//     }).then(() => {
//         return light(yellow, 2000)
//     }).then(() => {
//         return light(green, 1000)
//     }).finally(() => {
//         return lightStep()
//     })

//     // light(red, 3000)
//     // light(yellow, 2000)
//     // light(green, 1000)
// }

// lightStep()

//面试官  手写一个红绿灯算法

// function red() {
//     console.log('红灯亮');
// }
// function yellow() {
//     console.log('黄灯亮');
// }
// function green() {
//     console.log('绿灯亮');
// }

// function light(cb, await) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             cb()
//             resolve()
//         }, await)
//     })
// }

// function lightSet() {
//     Promise.resolve().then(() => {
//         return light(red, 3000)
//     })
//         .then(() => {
//             return light(yellow, 2000)
//         })
//         .then(() => {
//             return light(green, 1000)
//         })
//         .finally(() => {
//             return lightSet()
//         })
// }
// lightSet()//如此就完成了红绿灯算法


// function red() {
//     console.log('红灯亮');
// }
// function yellow() {
//     console.log('黄灯亮');
// }
// function green() {
//     console.log('绿灯亮');
// }


// function light(cb, await) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             cb()
//             resolve()
//         }, await)
//     })
// }

// function lightSet() {
//     Promise.resolve()
//         .then(() => {
//             return light(red, 3000)
//         })
//         .then(() => {
//             return light(yellow, 2000)
//         })
//         .then(() => {
//             return light(green, 1000)
//         })
//         .finally(() => {
//             return lightSet()
//         })
// }
// lightSet()//这样就实现了一个红绿灯算法



function red() {
    console.log('红灯亮');
}
function yellow() {
    console.log('黄灯亮');
}
function green() {
    console.log('绿灯亮');
}


function light(cb, await) {
    return new Promise((resolve) => {
        setTimeout(() => {
            cb()
            resolve()
        }, await);
    })
}

function lightSet() {
    Promise.resolve()
        .then(() => {
            return light(red, 3000)
        })
        .then(() => {
            return light(yellow, 2000)
        })
        .then(() => {
            return light(green, 1000)
        })
        .finally(() => {
            return lightSet()
        })
}
lightSet()//这样就实现了一个红绿灯算法
