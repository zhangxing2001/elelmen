// 集中去暴露vuex 各个模块需要暴露的属性和方法
import variaBles from '@/style/variables.scss'
export default {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => variaBles,
  sideBarOpen: (state) => state.app.sideBarOpened
}
// const state = {}
// const getters = {}
// const mutations = {}
// const actions = {}
// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }mk
