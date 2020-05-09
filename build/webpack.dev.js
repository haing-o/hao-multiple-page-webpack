const webpack = require('webpack')

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
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 文件内@import引入的另一个样式文件，也要先通过css-loader前的2个loader编译
              modules: true // 模块化
            }
          },
          'less-loader',
          'postcss-loader']
      },
    ]
  },
  // plugins可以帮助webpack在某一个时刻做一些事情
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}

module.exports = devConfig