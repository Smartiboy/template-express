// 处理错误页
let createError = require('http-errors')
// 框架主体
let express = require('express')
// nodejs path路径模块&fs文件模块
let path = require('path')
let fs = require('fs')
// 解析cookie 经过中间件处理之后，我们可以之前通过res.cookie取到cookie数据
let cookieParser = require('cookie-parser')
// 写日志
let logger = require('morgan')

// 引入路由
const indexRouter = require('./routes/index')

// 初始化app实例
let app = express()

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
app.use('/api', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  // 如果是开发环境则抛错
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
