// 数据存储结构
const MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
}
// 行为？
MyQueue.prototype = {
    push: function(x) {
        this.stack1.push(x)
    },
    // FIFO
    pop: function() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    },
    // 拿到最front 的值
    peek: function() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1]; 
    },
    empty: function() {
        return this.stack1.length === 0 && this.stack2.length === 0;    //   a===0  <=>  !a  
    }
}
