// 斐波那契数列
// 1 1 2 3 5 8 13 21 34 55

function fb(n) {
    if (n<=2){
        return 1
    }
    return fb(n-2) + fb(n-1)
}
console.log(fb(15));
