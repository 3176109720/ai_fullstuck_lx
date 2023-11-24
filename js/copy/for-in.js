let obj = {
    name: '涛哥',
    age: 18,
    like: {
        n: 'reading'
    }
}
let o = Object.create(obj)
o.sex = 'boy'


for (let key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key);
    }
}