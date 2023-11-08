var str = '([{}])'

function isValid(s) {
     const obj = {
        '(': ')',
        '{': '}',
        '[': ']',
      }
    const stack = []
    const len = s.length
    for (let i = 0; i < len; i++){
        if( s[i] === '('||s[i] === '['||s[i] === '{'){
            stack.push(s[i])
        }else{
            if (!stack.length||obj[stack.pop()] !== s[i]) {
                return false
            }
        }
    }
    if(stack.length){
        return false
    }
    return true
    
}

console.log(isValid(str)); // ture