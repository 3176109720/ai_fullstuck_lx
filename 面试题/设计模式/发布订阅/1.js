//发布订阅就是一个发布，一个订阅，那么就有四种原型上面的方法。
// class handles {
//     constructor() {
//         this.handles = {}//这个用于依赖收集
//     }
//     on(evnetName, cb) {

//         if (!this.handles[evnetName]) {
//             this.handles[evnetName] = []
//         }
//         this.handles[evnetName].push(cb)
//     }
//     off(evnetName, cb) {
//         if (!this.handles[evnetName]) return//必须加这一步，只有数组才有哦indexOf()方法
//         let index = this.handles[evnetName].indexOf(cb)
//         if (index !== -1) {
//             this.handles[evnetName].splice(index, 1)
//         }
//         return
//     }
//     emit(evnetName) {
//         if (this.handles[evnetName]) {
//             let handles = this.handles[evnetName]
//             handles.forEach(cb => {
//                 cb()
//             })
//         }
//     }
//     once(evnetName, cb) {
//         if (!this.handles[evnetName]) {
//             this.on(evnetName, cb)
//         }
//         return
//     }
// }
// function sell() {
//     console.log('小姐买房');
// }
// function nosell() {
//     console.log('小姐买房');
// }
// let p1 = new handles()
// p1.once('sell', sell)
// p1.once('sell', nosell)
// p1.emit('sell')//成功了
// //这就是完整的发布订阅了。
// // 发布订阅现在对我来说就是非常的简单了


class handles {
    constructor() {
        this.handles = {}
    }

    on(evnetName, cb) {
        if (!this.handles[evnetName]) {
            this.handles[evnetName] = []
        }
        this.handles[evnetName].push(cb)
    }
    off(evnetName, cb) {
        if (this.handles[evnetName]) {
            let index = this.handles[evnetName].indexOf(cb)
            if (index !== -1) {
                this.handles[evnetName].splice(index, 1)//影响原数组
            }
        }
    }
    emit(evnetName) {
        if (this.handles[evnetName]) {
            let arr = this.handles[evnetName]
            arr.forEach(cb => {
                cb()
            })
        }
    }
    once(evnetName, cb) {
        if (!this.handles[evnetName]) {
            this.on(evnetName, cb)
        }
        return
    }
}
let p1 = new handles()
function sell() {
    console.log('once方法');
}
function nosell() {
    console.log('on方法');
}
p1.once('sell', sell)
p1.once('sell', nosell)
p1.emit('sell')
console.log(p1.handles)
