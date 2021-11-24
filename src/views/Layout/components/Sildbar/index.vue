<template>
  <div class="">
    <div class="logo-container">
      <el-avatar :src="logo"></el-avatar>
      <h1 class="logp-title" v-if="!store.getters.sideBarOpen">
        element-admain
      </h1>
    </div>
    <!-- <h1>loge</h1> -->
    <el-scrollbar>
      <SidebarMenu class="border" />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
import logo from '@/assets/logo.png'
import { useStore } from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  :deep(.el-avatar) {
    --el-avatar-background-color: none;
  }
  .logp-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
  }
}
.border {
  border: 1px solid transparent;
}
</style>
