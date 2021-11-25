import ElementPlus from 'element-plus'
// import '../style/element-variables.scss'
// import 'element-plus/dist/index.css'/
import 'element-plus/lib/theme-chalk/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'
import zhCn from 'element-plus/lib/locale//lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

import store from '@/store/index'
export default (app) => {
  console.log(store.getters.language)
  app.use(ElementPlus, { locale: store.getters.language === 'zh' ? zhCn : en })
}
