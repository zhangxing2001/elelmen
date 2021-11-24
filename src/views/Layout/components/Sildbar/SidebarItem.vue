<template>
  <!-- 有二级菜单得 -->
  <el-submenu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem
        :title="route.meta.title"
        :icon="route.meta.icon"
        :children="true"
      />
    </template>
    <!-- 循环子菜单 -->
    <SidebarItem
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    />
  </el-submenu>
  <!-- 有一级菜单 -->
  <el-menu-item v-else :index="route.path">
    <MenuItem
      :title="route.meta.title"
      :icon="route.meta.icon"
      :children="false"
    />
    <template #title>{{ route.meta.title }}</template>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './Menuitem.vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style></style>
