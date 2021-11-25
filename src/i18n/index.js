import { createI18n } from 'vue-i18n'
import zh from './lang/zh'
import en from './lang/en'
import store from '../store'
// 切换的数据源
const messages = {
  en: {
    msg: { ...en }
  },
  zh: {
    msg: { ...zh }
  }
}
// 定义语言的类型
const locale = store.getters.language || 'en'
// 3.初始化 i18n
const i18n = createI18n({
  legacy: false, // 配合vue3.2 composyion api
  globalInjection: true, // 全局注册 t 函数 通过t去获取相应的数据
  locale: locale,
  messages: messages
})
export default i18n
