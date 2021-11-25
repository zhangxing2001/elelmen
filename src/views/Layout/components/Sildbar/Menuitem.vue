<template>
  <i :class="icon" v-if="icon.includes('el-icon')"></i>
  <svg-icon :iconName="icon" className="sideClass" v-else />
  <span v-if="children">{{ getTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { getTitle } from '@/utils/i18n.js'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  children: {
    type: Boolean
  }
})
</script>

<style>
.sideClass {
  margin-right: 10px;
  margin-left: 2px;
}
</style>
