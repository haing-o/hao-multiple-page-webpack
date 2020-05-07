const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development', // 不配置会警告
  // cheap只精确到行 inline将map文件内嵌在js里 eval更快也内嵌在js里 不新建一个map module还检查第三方loader或者plugin里的错误
  devtool: 'cheap-module-eval-source-map', // development
  // devtool: 'cheap-module-source-map', // production
  devServer: {
    contentBase: './dist', // 服务器基于什么文件夹运行
    // open: true, // 自动打开浏览器
    port: 8090,
    hot: true, //热更新
    // hotOnly: true //禁止浏览器自动刷新
  },
  // plugins可以帮助webpack在某一个时刻做一些事情
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // Tree Shaking 只对ES Module起作用
  // package.json中的sideEffects可以添加忽略项(不管是否引用都打包)
  // 测试环境下不会真正删除代码，只会提示 正式环境下才会彻底删除没用到的代码 减少代码量
  optimization: {
    usedExports: true
  },
}

module.exports = webpackMerge(commonConfig, devConfig)