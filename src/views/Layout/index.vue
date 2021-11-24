<template>
  <div
    class="app_wrapper"
    :class="!store.getters.sideBarOpen ? '' : 'hideSidebar'"
  >
    <SildBar
      class="siderbar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main_container">
      <div class="fixed_header"><AppMain /></div>
      <NavBar />
    </div>
  </div>
</template>

<script setup>
import SildBar from './components/Sildbar/index.vue'
import AppMain from './components/Appmain/index.vue'
import NavBar from './components/Navbar/index.vue'
import variables from '@/style/variables.scss'
import { useStore } from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
@import '~@/style/common.scss';
@import '~@/style/variables.scss';
.app_wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .siderbar-container {
    width: $sideBarWidth;
    height: 100vh;
    transition: width 0.28s;
  }
}
.hideSidebar .siderbar-container {
  width: $sideBarhideWidth;
}
.fixed_header {
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 10;
  border-top: 1px solid red;
  transition: width 0.28s;
  width: calc(100% - #{$sideBarWidth}); //用来计算动态width
}
.hideSidebar .fixed_header {
  width: calc(100% - #{$sideBarhideWidth});
  transition: width 0.28s;
}
.main_container .navbar {
  width: calc(100% - #{$sideBarhideWidth});
  transition: width 0.28s;
}
.navbar {
  .fixed_header {
    position: fixed;
    top: 50px;
    right: 0;
    z-index: 10;
    border-top: 1px solid red;
    transition: width 0.28s;
    width: calc(100% - #{$sideBarWidth}); //用来计算动态width
  }
}
</style>
