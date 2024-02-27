function a(cb) {
  setTimeout(function() {
    console.log('阿臻');
    cb()
  }, 1000)
}

function b() {
  setTimeout(() => {
    console.log('10亩地');
  }, 0)
}

a(b)