// 函数修饰符 函数内部有异步操作 es7 
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

    // 异步变同步，有利于流程控制
    const res =await fetch('https://qhabzb.laf.run/get-list')
    const {data} = await res.json()
    console.log(data)
    console.log('ok')
})()