import { createStore } from 'vuex'
import user from './modules/user'
import getters from './modules/getter'
export default createStore({
  getters,
  modules: {
    user
  }
})
