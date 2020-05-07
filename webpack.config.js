const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development', // 不配置会警告
  // cheap只精确到行 inline将map文件内嵌在js里 eval更快也内嵌在js里 不新建一个map module还检查第三方loader或者plugin里的错误
  devtool: 'cheap-module-eval-source-map', // development
  // devtool: 'cheap-module-source-map', // production
  // 默认的chunk name就是main
  entry: {
    'main': './src/index.js',
  },
  devServer: {
    contentBase: './dist', // 服务器基于什么文件夹运行
    // open: true, // 自动打开浏览器
    port: 8090,
    hot: true, //热更新
    hotOnly: true //禁止浏览器自动刷新
  },
  module: {
    rules: [
      // file-loader找到文件放到dist文件里并改名
      // url-loader除了有上述功能，还可以把文件打包为base64
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/', // 输出路径
            limit: 2048 // 小于的打包为base64
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 文件内@import引入的另一个样式文件，也要先通过css-loader前的2个loader编译
              modules: true // 模块化
            }
          },
          'sass-loader',
          'postcss-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 文件内@import引入的另一个样式文件，也要先通过css-loader前的2个loader编译
              modules: true // 模块化
            }
          },
          'postcss-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", {
            targets: {
              chrome: "67"
            },
            useBuiltIns: 'usage'
          }]]
        }
      }
    ]
  },
  // plugins可以帮助webpack在某一个时刻做一些事情
  plugins: [
    // 打包结束后自动生成html文件，并引入js
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // 默认清空dist文件夹
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // Tree Shaking 只对ES Module起作用
  // package.json中的sideEffects可以添加忽略项(不管是否引用都打包)
  // 测试环境下不会真正删除代码，只会提示 正式环境下才会彻底删除没用到的代码 减少代码量
  optimization: {
    usedExports: true
  },
  output: {
    // publicPath: 'http://cdn.com', // 用于在js文件前加公用前缀
    filename: '[name].js', //[name]代表直接使用入口命名
    path: path.resolve(__dirname, 'dist') // 默认就是dist文件夹
  }
}