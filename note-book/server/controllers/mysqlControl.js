//封装连接mysql的函数
const config = require('../config/index.js')
const mysql = require('mysql2');


//创建线程池
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT,
});

//连接mysql
const allService = {
    query: function (sql, values) {
        //连接线程池
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                } else {
                    //执行sql语句
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()//释放连接
                    })
                }
            })
        })
    }
}


//登录的接口
const userLogin = (username, password) => {
    let _sql = `select *from  users where username='${username}' and password='${password}'`;
    return allService.query(_sql)
}

//查询
const userFind = (username) => {
    let _sql = `select *from  users where username='${username}'`;
    return allService.query(_sql)
}
// 注册
const userAdd = (username, password, nickname) => {
    let _sql = `insert into users(username,password,nickname) values('${username}','${password}','${nickname}')`;
    return allService.query(_sql)
}

// 根据type查找文章的列表
const findNoteListByType = (type) => {
    let _sql = `select *from  note where note_type='${type}'`;
    return allService.query(_sql)
}

// 根据id查找文章详情
const findNoteDetailById = (id) => {
    let _sql = `select * from  note where id='${id}'`;
    return allService.query(_sql)
}

module.exports = {
    userLogin,
    userFind,
    userAdd,
    findNoteListByType,
    findNoteDetailById
}