<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown @command="handleCommand" class="avatar-container">
        <div class="avatar-wrapper">
          <!-- 头像 -->
          <el-avatar shape="square" :size="40" :src="avater"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-drop-down">
            <el-dropdown-item command="c">首页</el-dropdown-item>
            <el-dropdown-item command="d" disabled>课程主页</el-dropdown-item>
            <el-dropdown-item command="e" divided @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import avater from '@/assets/logo.png'
import { useStore } from 'vuex'
// 主动退出
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  border-radius: 0 1px 4px regb(0, 21, 41, 0, 08);
  position: fixed;
  top: 0;
  right: 0;
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        :deep(.el-avatar) {
          --el-avatar-background-color: none;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
