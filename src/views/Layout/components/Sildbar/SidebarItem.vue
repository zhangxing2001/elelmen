<template>
  <!-- 有二级菜单得 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
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
  </el-sub-menu>
  <!-- 有一级菜单 -->
  <el-menu-item v-else :index="route.path">
    <MenuItem
      :title="route.meta.title"
      :icon="route.meta.icon"
      :children="false"
    />
    <template #title>{{ getTitle(route.meta.title) }}</template>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './Menuitem.vue'
import { getTitle } from '@/utils/i18n.js'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style></style>
