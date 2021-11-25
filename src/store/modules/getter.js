// 集中去暴露vuex 各个模块需要暴露的属性和方法
import variaBles from '@/style/variables.scss'
import { generateColors } from '@/utils/theme.js'
export default {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => {
    return {
      ...variaBles,
      ...generateColors(state.theme.myColor)
    }
  },
  sideBarOpen: (state) => state.app.sideBarOpened,
  language: (state) => state.app.language,
  theme_color: (state) => state.theme.myColor
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
