/*
* 数据库配置文件
* 作者：何俊
* 创建时间：2021/08/03
* 更新时间：2021/08/03
* */

// 环境参数，可以根据不同环境设置不同的参数配置
const env = process.env.NODE_ENV

let MYSQL_CONF

// 开发环境
if (env === 'development') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'xxxxxxx',
    port: '3306',
    database: 'xxxx'
  }
}

// 生产环境
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'xxxx',
    password: 'xxxxx',
    port: '3306',
    database: 'xxxxx'
  }
}


module.exports = {
  MYSQL_CONF
}
