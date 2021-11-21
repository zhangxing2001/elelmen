import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getItem } from './storage'
import { TOHEN } from '../commmon/common'
import { isCheckTimeOut } from './auth.js'

// 导入store
import store from '@/store/index.js'
// 分装token create创建一个对象
const server = axios.create({
  // 后台代理
  timeout: 5000,
  baseURL: '/api'
})
// 不需要登录
// const whiteUrl = ['sys/login']
// 请求拦截 分装token
server.interceptors.request.use(
  (config) => {
    // if (!whiteUrl.includes(config.url) <= -1) {
    // 请求login
    if (store.getters.token) {
      if (!isCheckTimeOut()) {
        // 过期执行退出
        // 不应该请求
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 过期了'))
      }
      config.headers.Authorization = `Bearer ${getItem(TOHEN)}`
    }
    // }
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 错误的处理 服务器反悔错误 消息提醒
server.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const { success, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage({
        type: 'error',
        message: '11111111'
      })
      return Promise.reject(new Error('vvvvvvv'))
    }
  },
  (error) => {
    // token code=401 失效 单点登录 后台会返回特定的状态码 执行退出
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/logout')
    }
    // 对响应错误做点什么
    ElMessage({
      // 密码写错的情况下触发
      // 服务器没有反悔数据或者是服务器未知错误
      type: 'error',
      message: 'xxxx'
    })
    return Promise.reject(error)
  }
)
// 分装好的token 登陆以后才能访问token

// 导出一个对象
export default server
