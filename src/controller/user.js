/*
* 处理用户相关的数据操作
* */
const {exec, prevent} = require('../db/mysql')
const bcrypt = require('bcryptjs')
const {SuccessModel} = require('../model/resModel')
const register = (req, res) => {
  res.json(new SuccessModel('注册成功'))
}


module.exports = {
  register
}
