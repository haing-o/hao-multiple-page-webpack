const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css代码


const prodConfig = {
  mode: 'production', // 不配置会警告
  // cheap只精确到行 inline将map文件内嵌在js里 eval更快也内嵌在js里 不新建一个map module还检查第三方loader或者plugin里的错误
  devtool: 'none', // production
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
}

module.exports = prodConfig