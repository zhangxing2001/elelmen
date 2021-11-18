// 集中去暴露vuex 各个模块需要暴露的属性和方法
export default {
  token: (state) => state.user.token
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
// }
