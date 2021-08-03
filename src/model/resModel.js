/*
* 数据返回模型
* 作者：何俊
* 创建时间：2021/08/03
* 更新时间：创建时间：2021/08/03
* */

/*
* 基础数据
* @data：要返回的数据
* @message：要返回的提示文字
* */
class BaseModel {
  constructor(data, message) {
    if (message) {
      this.message = message
    } else {
      this.message = null
    }
    if (data) {
      this.data = data
    } else {
      this.data = null
    }
  }
}

/*
* 成功的返回数据
* @param
* data {String|Object|Array}：要返回的数据
* message {String}：要返回的提示文字
* method {String}：根据不同的请求方法，返回对应的状态码
* @return
* message {String}：提示文字
* data {String|Object|Array}：数据
* status: 状态提示文字
* code {Number}：状态码
* */
class SuccessModel extends BaseModel {
  constructor(data, message, method) {
    super(data, message)
    this.status = 'success'
    if (!message) {
      this.message = '请求成功'
    }
    if (method === 'GET') {
      this.code = 200
    } else if (method === 'DELETE') {
      this.code = 204
    } else {
      this.code = 201
    }
  }
}

/*
* 成功的返回数据
* @param
* data {String|Object|Array}：要返回的数据
* message {String}：要返回的提示文字
* code {String}：要返回的状态码
* @return
* message {String}：提示文字，如果值为null则根据code自行赋值
* data {String|Object|Array}：数据
* status: 状态提示文字
* code {Number}：状态码，默认400，
* */
class ErrorModel extends BaseModel {
  constructor(data, message, code=400) {
    super(data, message)
    if (code >= 500) {
      this.status = 'fail'
    } else {
      this.status = 'error'
    }
    if (!message) {
      switch (code) {
        case 400:
          this.message = '请求错误'
          break
        case 401:
          this.message = '令牌过期请重新登录'
          break
        case 403:
          this.message = '禁止访问'
          break
        case 404:
          this.message = '请求的资源不存在'
          break
        case 405:
          this.message = '请求方法不被允许'
          break
        case 406:
          this.message = '请求数据格式不正确'
          break
        case 410:
          this.message = '请求的资源被转移或被删除'
          break
        case 415:
          this.message = '客户端要求的返回格式不支持'
          break
        case 422:
          this.message = '客户端上传的附件无法处理，导致请求失败'
          break
        case 429:
          this.message = '客户端的请求次数超过限额'
          break
        case 500:
          this.message = '服务器发生错误'
          break
        case 502:
          this.message = '网关错误'
          break
        case 503:
          this.message = '服务器端当前无法处理请求'
          break
        case 504:
          this.message = '网关超时'
          break
      }
    }
    this.code = code
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
