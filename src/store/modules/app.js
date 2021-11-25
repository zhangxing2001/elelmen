import { getItem, setItem } from '../../utils/storage.js'
import { LANGUAGR } from '@/commmon/common.js'
const state = {
  sideBarOpened: false,
  language: getItem(LANGUAGR) || ''
}
const mutations = {
  toggleSideBar(state) {
    state.sideBarOpened = !state.sideBarOpened
  },
  setLanguage(state, lang) {
    setItem(LANGUAGR, lang)
    state.language = lang
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
