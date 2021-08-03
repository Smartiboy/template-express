# Express初始化项目模板

> 作者：Jimi
>
> 创建时间：2021/07/26
>
> 更新时间：2021/07/29

# 一、项目说明

本项目是一个Express初始化项目模板，其基于脚手架工具`express-generator@4.16.1`。

直接使用此脚手架工具生成的项目是一个全栈项目，但实际上现在我们的工作基本上都是前后端分离的，因此我对其进行了删减处理，移除了视图模块和静态资源，并对`app.js`文件进行了删减和中文注释。

# 二、项目依赖

在原有的基础上，我新增了如下内容：

- cross-env：控制环境变量
- mysql：操作mysql数据库
- xss：预防xss攻击

# 三、更新日志

## 0.1.2

- 🐞 修复呈现错误页问题

## 0.1.3

- 🆕 新增git忽略文件

## 0.2.0
- 🛠使用es6语法
- 🆕 新增代码统一风格
- 🆕 新增生产环境启动命令
- 🆕 新增pm2配置文件
- 🆕 新增日志文件
- 🆕 根据不同环境进行不同的日志配置
- 🛠 更改目录结构

## 0.3.0
- 🚀 express升级到4.17.1
- 🆕 新增git忽略日志文件
- 🪓️ 移除jade包
- 🛠 优化错误消息提示

## 0.4.0
- 🆕 新增数据库配置文件
- 🆕 新增Mysql连接配置
- 🆕 封装xss和sql注入
