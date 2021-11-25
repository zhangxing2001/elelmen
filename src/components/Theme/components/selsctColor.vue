<template>
  <el-dialog
    :model-value="showDialogVariable"
    :title="$t('msg.theme.themeChange')"
    width="30%"
    @close="handleClose"
  >
    <!-- 取色器 -->
    <div class="conent">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <el-color-picker v-model="color" :predefine="predefineColors" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{
          $t('msg.universal.cancel')
        }}</el-button>
        <el-button type="primary" @click="confrim">{{
          $t('msg.universal.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps, defineEmits, ref } from 'vue'
import { predefineColors } from '@/commmon/common.js'
import { generateNewStyle, writeStyleToHearTag } from '@/utils/theme'
defineProps({
  showDialogVariable: {
    type: Boolean,
    require: true
  }
})
const emits = defineEmits(['closeDialog'])
// 关闭模态框
const handleClose = () => {
  emits('closeDialog')
}
// 切换按钮
const confrim = async () => {
  console.log(color.value)
  // 保存主题色
  store.commit('theme/setMyColor', color.value)
  // 替换element 和 本地样式 让主题色生效
  // 1.获取所有的element的样式 不同版本的样式是不一样的
  // 2.将样式中的 情景颜色替换成 color.value
  // color 基本--> 生成一系列的和他相近的请景色
  // 3.建替换的样式 插入到header中 利用css的优先级插入的样式生效
  // 2-1 生成最终要替换的颜色
  // 关闭dialog
  const newStyle = await generateNewStyle(color.value)
  console.log(newStyle)
  emits('closeDialog')
  // 2-2 将替换完的样式 插入到header中 利用css的优先级让插入的样式生效
  writeStyleToHearTag(newStyle)
  // 本地样式
}
const store = useStore()

// 选色器选中的颜色  主题色 刷新不能掉
// 其他地方需要使用主题色 vuex localstoreage
const color = ref(store.getters.theme_color)
// 定义预定颜色
</script>

<style lang="scss" scoped>
.conent {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
