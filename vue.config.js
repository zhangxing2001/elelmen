const path = require('path') // 导入node 一个默认模块  解析目录相关

function getPath(src) {
  //__dirname //当前文件的绝路路径
  return path.join(__dirname, src)
}

module.exports = {
  // 配置svg svg-sprite-loader 解析指定的目录
  chainWebpack(config) {
    // config 就是webpack 默认的配置对象

    //1 . 获取webpack 对svg 的解析的loader,并且忽略那个目录
    config.module.rule('svg').exclude.add(getPath('src/icon_svg/svg')).end()

    //3.配置新的loader 对svg的解析

    // 处理什么类型的文件
    config.module
      .rule('icons') // 新增一个名字叫icons的rule规则
      .test(/\.svg$/) // 解析什么文件
      .include.add(getPath('src/icon_svg/svg')) // 处理那个目录下
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club',
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}
