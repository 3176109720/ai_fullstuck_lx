function a() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('a');
      resolve('yes')
    }, 1000)
  })

}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('b');
      reject('no')
    }, 500)
  })

}

function c() {
  console.log('c');
}


Promise.race([a(), b()]).then(
  (res) => {
    console.log(res);
    c()
  },
  (err) => {
    console.log(err, 2);
  }
)




// a()
// .then(        // return  promise {}
//   (res) => {
//     b()
//     return 123
//   },
//   (err) => {
//     console.log(err);
//     return 123
//   }
// )
// .then((result) => {
//   console.log(result);
// })



// .catch((err) => {
//   console.log(err);
// })

// then 
