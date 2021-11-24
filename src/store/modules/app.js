const state = {
  sideBarOpened: false
}
const mutations = {
  toggleSideBar(state) {
    state.sideBarOpened = !state.sideBarOpened
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
