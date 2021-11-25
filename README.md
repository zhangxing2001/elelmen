# element

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

// 退出登录
// token的作用
// a) token 是由后台再次登录的时候生成，通过response 给响应给前段
// 意思是说一个token 同时在前后段都有保存
// b)tocken 表示用户的身份，是一个用户的令牌，对于服务器之认token不认人
// 意思说别人获取你的token 以你身份就能登录服务器 获取你的敏感信息
// 说以处于不安全  需要对tocken进行安全策略
// 常见的处理方式
// 动态 token
// 时效 token
// 刷新 token
// ...
// 2.常见的退出方式有几种
// 主动退出 用户主动退出
// 被动退出 
    // token 失效 (超出了token有效期，失去了服务器的身份验证的条件)
    // 前端获取的token失效 和 后端生成的token失效
    // 单点登录  后端处理
    （在你已经登录的情况下，你或者别人在别人的设备上登录）
                  // 你当前的登录会被顶下来
总结 ：
1.前面只能处理主动退出 ，前端token失效

2.如果是后端token失效 =和 单点登录
  以特定的状态码通知你
    code 401 后台token失效
    code 405 单点登录   
    也是要你是执行退出操作

3.退出登录的逻辑操作
  1.清理掉用户的缓存数据
  2.清理该用户的权限
  3.返回到登录页面

4.主动退出(前段)

5.token 失效(前段)
   1.用户登录获得到token 的时候记录时间
   2.指定token 失效时间2小时
   3.再接口的时候 需要带token 需要判断这个token时候的有效期之内

6. token 失效（后端） 和 单点登录 
  后台会返回特定的状态码 执行退出
  


侧边栏业务
 1.动态路由的场景
      根据路由表的配置 动态生成侧边导航含，路由发生变化 对应的侧边栏菜单也会发生变化
   2.静态菜单的生成规则
   菜单：
   el-menu 整个菜单
   el-sub-menu 包含子菜单的一级菜单
   el-menu-item 子菜单 一级菜单
 3.实现动态路由和菜单的思路
    1.创建路由和对应的页面组件
    2.再动态获取sidebarMenu.vue 中加载创建的路由
        router.options.routes 取完整的路由
        优点：不会存在二级路由多次出现的情况
            缺点：
              只能获取当前的路由，对于新增的或者减少的路由表，无法获取
                在后后期配合用户权限的时候，不能根据用户权限更新路由表-也就无法更新菜单
        (router.getRoutes()
            优点是能够完整的路由表，对于路由变化他也能拿到，配合用户的权限只能用这种方式获取路由
            缺点
            二级陆游重复，并且和以及陆游在同一个层次

        问题
          1.处理重复的路由
          2.有些路由不应该出现在./login
             以什么原则决定到底是否出现在菜单中
               1. meta 路由原信息如果存在meta && meta.icon && meta.title 应该出现
                  以title 作为标题 以icon作为logo 显示4
                     1. 如果存在 el-sub-menu 来显示一级菜单
                        el-menu-item显示二级菜单
                      2.不存在children 
                        el-menu-item显示一级菜单
              2. 不过不满足 meta && meta。icon &&meta.title 不应该出现
    3.根据获取的路由对象 遍历输出对应的菜单

/*
    中英文切换（国际化）
      1.需要一个变量 locale 控制语言的环境
      2.所有的语言中的数据要事先准备好
      3.定义一个方法获取对应的语言包中的数据
  
    还要借助一个插件 i18n
      1.下载 i18n  npm install vue-i18n@next  // 因为项目用的是vue3.2的版本 保证i18n 版本必须是  > 9.0.0 
      然后引入 i18n   import { createI18n } from "vue-i18n"
*/ 

