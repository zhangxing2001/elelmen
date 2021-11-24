// 在js 中可以直接引入node的模块但是再.vue引入不了
import path from 'path'
// 处理重复的路由
const getChildrenRouters = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      // 当前route是一级路由
      result.push(...route.children)
    }
  })
  return result
}

// 去除重复的二级路由
export const filterRouter = (routes) => {
  // 获取所有的二级·路由
  const cheildrenRouters = getChildrenRouters(routes)

  return routes.filter((router) => {
    // 只要在childrenRouters存在的，说明是重复的二级路由，然后不保存
    return !cheildrenRouters.find((childrenRoute) => {
      return childrenRoute.path === router.path
    })
  })
}

//  2.将routes （filterRouter）为了配合v-for遍历生成菜单，需要格式化数据
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

export function generateMenus(routes, basePath = '') {
  const result = []
  // 遍历路由表
  routes.forEach((item) => {
    // 不存在 children && 不存在 meta 直接 return
    if (isNull(item.meta) && isNull(item.children)) return
    // 存在 children 不存在 meta，进入迭代
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 合并 path 作为跳转路径
    const routePath = path.resolve(basePath, item.path)
    console.log(item.path, '9999')
    console.log(routePath, '000000')
    // 路由分离之后，存在同名父路由的情况，需要单独处理
    let route = result.find((item) => {
      console.log(item.path, routePath, '1111111')
      return item.path === routePath
    })
    console.log(route, 10000)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      console.log(route, 20000)
      // icon 与 title 必须全部存在
      if (route.meta.icon && route.meta.title) {
        // meta 存在生成 route 对象，放入 arr
        result.push(route)
      }
    }

    // 存在 children 进入迭代到children
    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
