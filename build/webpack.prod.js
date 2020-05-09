const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 分离css代码
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css代码


const prodConfig = {
  mode: 'production', // 不配置会警告
  // cheap只精确到行 inline将map文件内嵌在js里 eval更快也内嵌在js里 不新建一个map module还检查第三方loader或者plugin里的错误
  devtool: 'none', // production
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
}

module.exports = prodConfig