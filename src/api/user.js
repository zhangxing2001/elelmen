// import axios from 'axios'
import axios from '../utils/erquest.js'
// 定义user相关的网络请求
// 封装toke n
export const login = (data) => {
  // axios的请求
  return axios.request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 获取用户数据
export const getUserInfo = () => {
  return axios.request({
    url: 'sys/profile',
    method: 'GET'
  })
}
