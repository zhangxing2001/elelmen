<template>
  <!-- 菜单 -->
  <el-menu
    :background-color="store.getters.cssVar.menuBg"
    :text-color="store.getters.cssVar.menuText"
    :active-text-color="store.getters.cssVar.menuActiveText"
    :menu-trigger="true"
    :default-active="activePath"
    :router="true"
    :collapse="store.getters.sideBarOpen"
    :class="store.getters.sideBarOpen ? 'popk' : 'asasa'"
  >
    <!-- 子菜单 -->
    <!-- 一级二级菜单得展示 -->
    <SidebarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { filterRouter, generateMenus } from '@/utils/router.js'
import { computed } from '@vue/reactivity'
import SidebarItem from './SidebarItem.vue'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
// console.log(router)
// console.log(router.options.routes) // 获取一级二级路由但是是分开的
console.log(router.getRoutes()) // 获取所有的路由包括二级路由   原始的
console.log(filterRouter(router.getRoutes())) // 过滤后的去重
console.log(generateMenus(filterRouter(router.getRoutes()))) // 格式化一后的
// 因为路由的变化
const routes = computed(() => {
  const filterRoutes = filterRouter(router.getRoutes())
  return generateMenus(filterRoutes)
})
const route = useRoute()
// 以后激活的路由要变化
const activePath = computed(() => {
  const { path } = route
  return path
})
console.log(activePath.value)
console.log(route)
</script>

<style lang="scss" scoped>
@import '~@/style/variables.scss';
.asasa {
  width: $sideBarWidth;
  transition: width 0.28s;
}
.popk {
  width: $sideBarhideWidth;
  transition: width 0.28s;
}
</style>
