import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getItem } from './storage'
import { TOKEN } from '../commmon/common'
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
      config.headers.Authorization = `Bearer ${getItem(TOKEN)}`
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
    console.log(success)
    if (success) {
      return data
    } else {
      console.log('xxx')
      ElMessage({
        type: 'error',
        message: '11111111'
      })
      return Promise.reject(new Error('vvvvvvv'))
    }
  },
  (error) => {
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
