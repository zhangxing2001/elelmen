import { createStore } from 'vuex'
import user from './modules/user'
import getters from './modules/getter'
import app from './modules/app'
export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
