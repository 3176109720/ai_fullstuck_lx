// //流程，我要写一个发布订阅这种设计模式的构造函数，发布订阅可以用在父子组件传值里面，一个发布事件
// //一个订阅事件

// class EventEmiter {
//     constructor() {
//         this.handels = {}//用一个对象来存订阅的事件
//     }
//     on(eventName, cb) {//在构造函数的原型上面，让实例对象隐式继承
//         if (!this.handels[eventName]) {
//             this.handels[eventName] = []
//         }
//         this.handels[eventName].push(cb)
//     }//这个就是on方法，收集订阅的内容，将所有的依赖进行收集。
//     emit(eventName) {//将事件发布，触发所有的依赖
//         if (this.handels[eventName]) {
//             const handles = this.handels[eventName]
//             handles.forEach(cb => {
//                 cb()
//             })
//         }
//     }
//     off(eventName, cb) {//取消订阅
//         if (this.handels[eventName]) {
//             const handels = this.handels[eventName]
//             const index = handels.indexOf(cb)
//             if (index !== -1) {
//                 handels.splice(index, 1)
//             }
//         }
//     }
//     once(eventName, cb) {
//         const handels = this.handels[eventName]
//         if (!handels) {
//             this.on(eventName, cb)
//         }
//         return
//     }

// }


// let eventEmit = new EventEmiter()
// function sell() {
//     console.log('emit触发1')
// }
// function unsell() {
//     console.log('emit触发2')
// }

// eventEmit.on('sell', sell)
// eventEmit.on('sell', unsell)
// eventEmit.emit('sell')


class EventEmiter {
    constructor() {
        this.handles = {}
    }
    on(eventName, cb) {
        if (!this.handles[eventName]) {
            this.handles[eventName] = []
        }
        else {
            this.handles[eventName](cb)
        }
    }
    off(eventName, cb) {
        if (this.handles.hasOwnProperty(eventName)) {
            let index = this.handles[eventName].indeOf(cb)
            if (index != -1) {
                this.handles[eventName].splice(index, 1)
            }
        }
    }
    once(eventName, eventName) {
        let handels = this.handles[eventName]
        if (!handels) {
            cb(eventName, cb)
        }
        else {
            return
        }
    }
    emit(eventName) {
        if (this.handles[eventName]) {
            let handels = this.handles[eventName]
            handels.forEach(cb => cb())
        }
    }
}
