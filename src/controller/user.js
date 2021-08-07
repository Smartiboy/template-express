/*
* 处理用户相关的数据操作
* */
const {exec} = require('../db/mysql')
const bcrypt = require('bcryptjs')
const {SuccessModel} = require('../model/resModel')
const register = async (req, res) => {
  // 获取数据
  const {username, password, email} = req.body
  // 查询用户名是否已被使用
  const result = await exec(`select username from users where username='${username}'`)
  if (result.length) {
    return res.json(new SuccessModel(null, '用户名已存在', req.method, 0))
  }
  // 密码加密
  let genPassword = bcrypt.hashSync(password, 10)
  // 写入数据
  let insertSql = `insert into users (username, password, role, create_time, update_time, email) values (?, ?, ?, ?, ?, ?)`
  let nowTime = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  try {
    const data = await exec(insertSql, [username, genPassword, 2, nowTime, nowTime, email])
    if (data.affectedRows.length) {
      return res.json(new SuccessModel(null, '注册成功', req.method))
    }
  } catch (e) {
    return res.json(new SuccessModel(null, '注册失败', req.method, 0))
  }
}


module.exports = {
  register
}
