/*
* 定义用户相关的验证规则
* 作者：何俊
* 创建时间：2021/08/03
* */
const joi = require('joi')

// 用户名
const username = joi.string().pattern(/^[\u4e00-\u9fa5a-zA-Z]{2,12}$/).required().messages({
  'string.empty': '用户名不允许为空',
  'any.required': '用户名为必填项',
  'string.pattern.base': '用户名不符合校验规则',
})

// 密码
const password = joi.string().pattern(/^[a-z0-9]{6,16}$/i).required().messages({
  'string.empty': '密码不允许为空',
  'any.required': '密码为必填项',
  'string.pattern.base': '密码不符合校验规则',
})

// 邮箱
const email = joi.string().pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).required().messages({
  'string.empty': '邮箱不允许为空',
  'any.required': '邮箱为必填项',
  'string.pattern.base': '邮箱不符合校验规则',
})

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
