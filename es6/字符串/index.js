let date = new Date()

// let time = date.getFullYear() + '年' + (Number(date.getMonth()) + 1) + '月' + date.getDate() + '日'

let t = `${date.getFullYear()}年${+date.getMonth()+1}月${date.getDate()}日`

console.log(t);