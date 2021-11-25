<template>
  <div
    :class="store.getters.sideBarOpen ? 'navbar' : 'ascnas'"
    class="axs11xasxs"
  >
    <!-- 切换侧边栏的组件 -->
    <Cuttle class="cuttle-container" />
    <!-- 动态面包屑 -->
    <Breadcrumb class="Breadcrumb-container" />
    <div class="rigth-menu">
      <!-- 国际化中英文按钮的切换 -->
      <Theme class="right-menu-item" />
      <select-lang class="right-menu-item" data="" />
      <el-dropdown @command="handleCommand" class="avatar-container">
        <div class="avatar-wrapper">
          <!-- 头像 -->
          <el-avatar shape="square" :size="40" :src="avater"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-drop-down">
            <el-dropdown-item command="c">{{
              $t('msg.navBar.home')
            }}</el-dropdown-item>
            <el-dropdown-item command="d" disabled>{{
              $t('msg.navBar.course')
            }}</el-dropdown-item>
            <el-dropdown-item command="e" divided @click="logout">{{
              $t('msg.navBar.logout')
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import avater from '@/assets/logo.png'
import { useStore } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Cuttle from '@/components/Cuttie/index.vue'
import SelectLang from '@/components/SelectLang/index.vue'
import Theme from '@/components/Theme/index.vue'

// 主动退出
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
// 监听路由的变化
</script>

<style lang="scss" scoped>
@import '~@/style/variables.scss';
.navbar {
  height: 50px;
  overflow: hidden;
  // line-height: 50px;
  position: relative;
  border-radius: 0 1px 4px regb(0, 21, 41, 0, 08);
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - #{$sideBarWidth});
  border-bottom: 1px solid red;
  display: flex;

  .avatar-container {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      // right: 0;
    }
  }

  .cuttle-container {
    cursor: pointer;
    line-height: 50px;
    float: left;
    height: 100%;
    // transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
.axs11xasxs {
  width: calc(100% - #{$sideBarWidth});
}
.ascnas {
  height: 50px;
  line-height: 50px;
  // overflow: hidden;
  position: relative;
  border-radius: 0 1px 4px regb(0, 21, 41, 0, 8);
  position: fixed;
  top: 0;
  right: 0;
  // width: 64px;
  border-bottom: 1px solid red;
  display: flex;
  transition: width 0.28s;
}

.Breadcrumb-container {
  line-height: 50px;
  height: 50px;
}
:deep(.el-avatar) {
  --el-avatar-background-color: none;
  margin-right: 10px;
}
.rigth-menu {
  position: absolute;
  right: 0px;
  top: 0;
  display: flex;
  align-items: center;
}
:deep(.right-menu-item) {
  display: inline-block;
  padding: 13px 13px;
  font-size: 24px;
  color: #ccc;
  vertical-align: text-bottom;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
