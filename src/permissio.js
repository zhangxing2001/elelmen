// 用户鉴权 路由守卫
import router from './router/index.js'
import store from './store/index.js'
const whiteRouter = ['/login']
// 进入每个路由都会执行这个钩子
router.beforeEach(async (to, from, next) => {
  // 当用户没有登录时，只能进入login页面
  // 用户登陆过后 token 未过期前不能进入login 页面
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 登录成功 跳转到首页
      if (!store.getters.hasUserInfo) {
        // 判断没有用户的信息 就去发送axios
        // setTimeout(async () => {
        //   await store.dispatch('user/getUserInfo')
        //   next()
        // }, 4000)
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteRouter.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
