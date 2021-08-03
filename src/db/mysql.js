const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')
const xss = require('xss')

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

// 防止xss和sql注入
function prevent(value) {
  xss(mysql.escape(value))
}

// 不进行断开连接，exec函数属于单例模式

module.exports = {
  exec,
  prevent
}
