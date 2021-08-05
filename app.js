// 框架主体
const express = require('express')
// nodejs path路径模块&fs文件模块
const path = require('path')
const fs = require('fs')
// 解析cookie 经过中间件处理之后，我们可以之前通过res.cookie取到cookie数据
const cookieParser = require('cookie-parser')
// 写日志
const logger = require('morgan')
// 数据校验
const joi = require('joi')
// 错误数据返回
const {ErrorModel, SuccessModel} = require('./src/model/resModel')

// 引入路由
const userRouter = require('./src/routes/user')

// 初始化app实例
const app = express()

// 写日志
// 根据不同环境进行不同的日志配置
// 开发环境
if (process.env.NODE_ENV === 'development') {
  app.use(logger( 'dev'))
} else {
  // 生产环境
  // 获取日志文件名
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  // 创建写数据流
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(logger('combined', {
    stream: writeStream
  }))
}

// 解析 application/json
app.use(express.json())
// 解析 xxx-www-form-urlencoded
app.use(express.urlencoded({extended: false}))
// 解析 cookie
app.use(cookieParser())

// 注册路由
app.use('/auth', userRouter)

// 捕获404并返回错误数据
app.use((req, res, next) => {
  res.json(new ErrorModel(null, null, 404))
})

// 捕获错误信息
app.use((err,req, res, next) => {
  // 判断是否是校验错误
  if (err instanceof joi.ValidationError) {
    res.json(new SuccessModel(null, err.message, req.method))
  }
})

// 处理其他程序错误
app.use((err, req, res) => {
  // 设置局部变量，仅提供开发中的错误
  res.locals.message = err.message
  // 如果是开发环境则抛错
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // 设置错误状态
  res.status(err.status || 500)
  // 返回错误数据
  res.json(new ErrorModel(null, err.message, err.status))
})

module.exports = app
