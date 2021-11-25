import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 加载svg 的处理
import initSvgIcon from './icon_svg/index.js'
// 引入样式的输入口文件
import './style/index.scss'
// 用户鉴权
import './permissio.js'
// 引入 i18n
import i18n from './i18n/index.js'

const app = createApp(App)
initSvgIcon(app)
installElementPlus(app)
app.use(store).use(router).use(i18n).mount('#app')
