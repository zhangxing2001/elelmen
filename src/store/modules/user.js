// 封装token ---> api 只有登录以后才能访问 再axios 封装header{token}
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage.js'
// import * as utils from '../../utils/storage.js'
import { login, getUserInfo } from '../../api/user.js'
// 导入路由
import router from '../../router/index.js'
import { setTimeStamp } from '@/utils/auth.js'
// 密码写错的情况下触发 需要引入

import { TOHEN, USER_INFO } from '@/commmon/common.js'
const state = {
  token: getItem(TOHEN) || '',
  userInfo: {}
}
const getters = {}
const mutations = {
  setToken(state, token) {
    state.token = token
    setItem(TOHEN, token)
    console.log(state.token)
  },
  getUserInfo(state, zhangxing) {
    state.userInfo = zhangxing
    setItem(USER_INFO, zhangxing)
  }
}
const actions = {
  login({ commit }, info) {
    // 获取到登录的账号的信息
    // context 上下文
    // info 传过来的数据
    // info.password = md5(info.password)
    const { username, password } = info
    return new Promise((resolve) => {
      login({
        username,
        password: md5(password)
      })
        .then((res) => {
          commit('setToken', res.token)
          // 记录token的获取时间
          setTimeStamp()
          resolve()
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  logout({ commit }) {
    // 清理用户的数据
    commit('setToken', '')
    router.push('/login')
  },
  // 请求用户数据
  getUserInfo({ commit }) {
    // 发送axios
    getUserInfo()
      .then((res) => {
        commit('getUserInfo', res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export default {
  namespaced: true, // 要写上不然他以为是全局的
  state,
  getters,
  mutations,
  actions
}
