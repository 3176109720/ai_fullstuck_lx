var stark = [];  // 栈是一种特殊的数组，只有push和pop方法的数组

stark.push('红烧肉')
stark.push('白斩鸡')
stark.push('铁板年糕')
stark.push('水煮白肉')

while(stark.length) {
    const top = stark[stark.length - 1]
    console.log('我想吃', top);
    stark.pop()
}