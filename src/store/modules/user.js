// 封装token ---> api 只有登录以后才能访问 再axios 封装header{token}
import md5 from 'md5'
import { setItem, getItem } from '../../utils/storage.js'
// import * as utils from '../../utils/storage.js'
import { login } from '../../api/user.js'
// 密码写错的情况下触发 需要引入

import { TOKEN } from '../../commmon/common.js'
const state = {
  token: getItem(TOKEN) || ''
}
const getters = {}
const mutations = {
  setToken(state, token) {
    console.log(']]]]', token)
    state.token = token
    setItem(TOKEN, token)
  }
}
const actions = {
  login({ commit }, info) {
    // 获取到登录的账号的信息
    // context 上下文
    // info 传过来的数据
    // info.password = md5(info.password)
    const { username, password } = info
    return new Promise((resolve, reject) => {
      login({
        username,
        password: md5(password)
      })
        .then((res) => {
          commit('setToken', res.token)
          resolve()
        })
        .catch((err) => {
          console.log('xxxx--->', err) 
          reject()
        })
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
