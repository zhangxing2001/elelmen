<template>
  <div class="cuttle_container" @click="toggleSideBar">
    <svg-icon :iconName="setIcon" className="cuttle" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const setIcon = computed(() => {
  return store.getters.sideBarOpen ? 'cuttle_open' : 'cuttle_close'
})
const toggleSideBar = () => {
  store.commit('app/toggleSideBar')
}
</script>

<style lang="scss" scoped>
.cuttle_container {
  float: left;
  padding: 0 21px;
}
.cuttle {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
</style>
