var MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
};
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
};
MyQueue.prototype.pop = function() {
  // 将栈1中的数据倒到栈2中，再出栈
  if (this.stack2.length == 0) {
    while(this.stack1.length) {
      const top = this.stack1.pop()
      this.stack2.push(top)
    }
  }
  return this.stack2.pop()
};
MyQueue.prototype.peek = function() {
  if (this.stack2.length == 0) {
    while(this.stack1.length) {
      const top = this.stack1.pop()
      this.stack2.push(top)
    }
  }
  return this.stack2[this.stack2.length - 1]

  // let top = this.pop()
  // this.stack2.push(top)
  // return top
  
};
MyQueue.prototype.empty = function() {
  return !this.stack1.length && !this.stack2.length
};


let queue = new MyQueue();
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.pop()); // 1
queue.push(4)
queue.push(5)
console.log(queue.peek());  // 2
console.log(queue.pop()); // 2
console.log(queue.empty()); // false
