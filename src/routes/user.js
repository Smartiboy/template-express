/*
* 处理用户修改的路由
* */
let express = require('express')
let router = express.Router()
const  expressJoi = require('@escook/express-joi')
const {register_schema} = require('../schema/user')
const {register} = require('../controller/user')

// 注册用户
router.get('/register', expressJoi(register_schema), register)

module.exports = router
