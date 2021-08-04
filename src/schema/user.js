/*
* 定义用户相关的验证规则
* 作者：何俊
* 创建时间：2021/08/03
* */
const joi = require('joi')

// 用户名
const username = joi.string().pattern(/^[\u4e00-\u9fa5a-zA-Z]{2,12}$/).required()

// 密码
const password = joi.string().pattern(/^[a-z0-9]{6,16}$/i).required()

// 邮箱
const email = joi.string().pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).required()

// 注册规则
register_schema = {
  params: {
    username,
    password,
    email
  }
}

module.exports = {
  register_schema
}
