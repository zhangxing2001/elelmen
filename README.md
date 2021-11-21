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
  
