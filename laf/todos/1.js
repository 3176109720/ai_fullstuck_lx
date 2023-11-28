// 函数修饰符 函数内部有异步操作 es7 
// 声明这个函数里面有异步
// async + await 是一对，要一起出来 
(async function() {
    // js 是单线程语言 放入event loop ，先执行后面的代码
    // thenable  异步任务中控制执行顺序
    // fetch('https://qhabzb.laf.run/get-list')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         console.log('end');
    //         console.log('ok');
    //     })
    console.log('ok');
    // 异步变同步，有利于流程控制
    // await 后面跟着一个promise实例，同步等待被 resolve 
    // 代码的编写顺序= 执行顺序
    const res =await fetch('https://qhabzb.laf.run/get-list')
    const {data} = await res.json()
    console.log(data)
    console.log('ok')
})()