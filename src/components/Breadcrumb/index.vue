<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="list">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 若果是最后一项是不可以点击的 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirecrt">{{
          item.meta.title
        }}</span>
        <!-- 不是最后一项就可以点击 -->
        <a v-else class="redirect" @click.prevent="onlink(item)">{{
          item.meta.title
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const breadcrumbData = ref([])
watch(
  route,
  () => {
    // 过滤
    breadcrumbData.value = route.matched.filter((item) => {
      return item.meta && item.meta.title
    })
    console.log(route.matched)
  },
  { immediate: true }
)
// 点击跳转
const router = useRouter()
const onlink = (item) => {
  router.push({ path: item.path })
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirecrt {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
  }
}
</style>
