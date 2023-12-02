function a(ab) {
    setTimeout(() => {
        console.log('A');
        ab()
    },1000)
   
}
function b() {
    // setTimeout(() => {
        console.log('B');
    // },500)
}

a(b)