<template>
  <div class="app-main">
    <!-- 处理二级路由的显示容器 -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// @import '~@/style/variables.scss';
.app-main {
  min-width: calc(100vh - 50px);
  // width: calc(100% - #{$sideBarWidth});
  width: 100%;
  border: 1px solid blue;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
