const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css代码
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const prodConfig = {
  mode: 'development', // 因为很多公用js文件还没有实现模块化，所以使用development，tree shaking暂时不删掉未使用的代码
  // mode: 'production', // 
  // cheap只精确到行 inline将map文件内嵌在js里 eval更快也内嵌在js里 不新建一个map module还检查第三方loader或者plugin里的错误
  devtool: 'none', // production
  // optimization: {
  //   minimizer: [
  //     new OptimizeCSSAssetsPlugin({})
  //   ]
  // },
  plugins: [
    // 默认清空dist文件夹
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      Vue: 'vue/dist/vue.min.js',
      axios: 'axios/dist/axios.min.js',
    }),
  ]
}

module.exports = prodConfig