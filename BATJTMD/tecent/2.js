// 箭头函数 arrow function 
const createPhoneNumber =(nums) =>{
    // Array Object jion
    // Array -> string
    // replace
    // nums.join('')
    // 字符串拼接 低级方法
    // 架构的感觉 字符串模板 一个系列
    let format = "(xxx)xxx-xxxx"; // 字符串模板
    for (let i = 0;i < nums.length; i++){
        format = format.replace('x',nums[i]) // 替换的过程
    }
    return format
}
    // nums.join('').replace(/(\d{3})(\d{3})(\d{3})/,'($1)$2-$3')

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));