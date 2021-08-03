const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 统一执行SQL的函数
function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}

// 不进行断开连接，exec函数属于单例模式

module.exports = {
  exec,
  escape: mysql.escape // 防止SQL注入
}
