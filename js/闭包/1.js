var arr = []

for (var i = 0; i < 10; i++) {

  (function a(j) {
    arr[i] = function() {
      console.log(j);
    }
  })(i)

  
}


// ------
for (var j = 0; j < arr.length; j++) {
  arr[j]()
}



// (function () {
//   console.log(123);
// })()