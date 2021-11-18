import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './modules/getter.js'
export default createStore({
  getters,
  modules: {
    user
  }
})
