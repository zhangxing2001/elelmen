<template>
  <div class="app_wrapper">
    <SildBar
      class="siderbar-container"
      :style="{ backgroundColor: variables.subMenuBg }"
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
  }
  .main_container {
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    .fixed_header {
      position: fixed;
      bottom: 0px;
      right: 0;
      z-index: 10;
      width: calc(100% - #{$sideBarWidth}); //用来计算动态width
    }
  }
}
</style>
