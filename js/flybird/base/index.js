// 对象
var li ={
    name: '李少',
    age: 18,
    girlFriend: '高圆圆',
    health: 100,
    smoke: function(){
        console.log('i am smoking,cool!');
        this.health--     //对象内可以用this代替对象名
    },
    drink: function(){
        console.log('it is cool!');
        this.health++
    }
}

// obj.girlFriend = '刘亦菲'
// delete obj.girlFriend

li.smoke()
li.smoke()
console.log(li.health);