import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

import initSvgIcon from './icon_svg/index.js'

import './style/index.scss'
import './icon_svg/index.js'
import './permissio.js'

const app = createApp(App)
initSvgIcon(app)
installElementPlus(app)
app.use(store).use(router).mount('#app')
