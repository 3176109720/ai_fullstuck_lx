function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a');
      reject('yes')
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('b');
      resolve()
    }, 1500)
  })
  
}

function c() {
  console.log('c');
}

// Promise.all([a(), b()]).then(c)
// all 必须要接收到的说有的promise状态都为resolve，then才会调用


// a()
// .then((res) => {
//   console.log(res);
//   c()
// })
// .catch((err) => {
//   console.log(err);
// })


Promise.race([b(), a()])
.then(c)
.catch((err) => {
  console.log(err);
})