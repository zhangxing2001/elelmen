<template>
  <div class="login-container">
    <el-form
      class="el_from"
      :model="loadefrom"
      :rules="loginRules"
      ref="loginRef"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="llll">
          <svg-icon iconName="jurassic" />
        </span>
        <el-input
          v-model="loadefrom.username"
          type="text"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="llll"> <svg-icon iconName="mima" /></span>
        <el-input
          v-model="loadefrom.password"
          :type="flag ? 'text' : 'password'"
        ></el-input>
        <span @click="toggleIcon" class="llll">
          <svg-icon iconName="xianshimima" />
        </span>
      </el-form-item>
      <el-button type="primary" @click="handleLogin"
        >登录{{ store.state.user.token }}</el-button
      >
    </el-form>
  </div>
  <!-- <svg aria-hidden="true" class="defaultSvgClass">
    <use xlink:href="#icon-jurassic" class="axas"></use>
  </svg> -->
</template>

<script setup>
import { ref } from 'vue'
import { passwordValidate } from './rule.js'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import '../../icon_svg/svg/jurassic.svg'
const loadefrom = ref({
  username: 'super-admin',
  password: '123456'
})
const flag = ref(false)
const toggleIcon = () => {
  flag.value = !flag.value
}
// 表单验证
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur', // 触发焦点trigger触发
      message: '账号必须填写'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: passwordValidate() // 封装的
    }
  ]
})
// 怎么引用dom
const loginRef = ref(null)
// 登录逻辑
const store = useStore()
const router = useRouter()
const handleLogin = () => {
  loginRef.value.validate((validate) => {
    if (!validate) {
      return // 一个规则没有通过
    }
    // 验证通过执行登录逻辑 调用定义好的actions
    store
      .dispatch('user/login', loadefrom.value)
      .then((res) => {
        router.push({
          name: 'Index'
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
</script>
<style lang="scss">
.login-container {
  min-height: 100%;
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  .title {
    text-align: center;
    padding: 20px 0;
  }
  .el_from {
    height: 100%;
    width: 520px;
    margin: auto;
    .el-form-item__content {
      display: flex;
      align-items: center;
      border: 1px solid blue;
      border-radius: 5px;
      .no-inherit {
        padding: 0 0 0 10px;
      }
      .el-input__inner {
        border: none;
        background: transparent;
      }
    }
    .el-button--primary {
      width: 100%;
    }
  }
  .primary {
    margin-top: 20px;
    border: none;
  }
}
.llll {
  padding: 0 10px;
}
</style>
