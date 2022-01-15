/*
* 数据库配置文件
* 作者：何俊
* 创建时间：2021/08/03
* 更新时间：2022/01/15
* */

// 加载配置文件
require('dotenv').config()
// 环境参数，可以根据不同环境设置不同的参数配置
const env = process.env.NODE_ENV

let MYSQL_CONF

// 开发环境
if (env === 'development') {
  MYSQL_CONF = {
    host: process.env.DEV_MYSQL_HOST,
    user: process.env.DEV_MYSQL_USER,
    password: process.env.DEV_MYSQL_PASSWORD,
    port: process.env.DEV_MYSQL_PORT,
    database: process.env.DEV_MYSQL_DATABASE,
    timezone: 'SYSTEM' // 修复数据库时间不准问题
  }
}

// 生产环境
if (env === 'production') {
  MYSQL_CONF = {
    host: process.env.PRD_MYSQL_HOST,
    user: process.env.PRD_MYSQL_USER,
    password: process.env.PRD_MYSQL_PASSWORD,
    port: process.env.PRD_MYSQL_PORT,
    database: process.env.PRD_MYSQL_DATABASE,
    timezone: 'SYSTEM'
  }
}


module.exports = {
  MYSQL_CONF
}
