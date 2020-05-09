const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 默认的chunk name就是main
  entry: {
    'main': './src/index.js',
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
            corejs: "3",
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
  ],
  optimization: {
    // code splitting
    // 代码分割，和webpack无关
    splitChunks: {
      // webpack中实现代码分配，两种方式（将业务逻辑代码和第三方插件代码分割）
      // 1.同步代码：需要webpack.common.js中配置splitChunks(initial)
      // 2.异步代码：无需做任何配置，webpack自动分割(async 默认import())
      chunks: 'all',
      minSize: 30000, // 30kb 引入文件至少要大于这个值才会拆分
      minChunks: 1,
      maxAsyncRequests: 5, // 一个js文件最多引用数量
      maxInitialRequests: 3, // 入口文件最多引用数量
      automaticNameDelimiter: '~', // 生成的文件名时使用的分割符
      name: true, // 使用webpack自动生成的文件名 false时会使用数字
      // 缓存组 把符合的放在同一个组里
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 是否在node_modules里
          priority: -10,
          // filename: 'vendors.js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true, // 复用之前打包过的代码，不会重复打包
          // filename: 'common.js'
        }
      }
    }
  },
  output: {
    // publicPath: 'http://cdn.com', // 用于在js文件前加公用前缀
    filename: '[name].js', //[name]代表直接使用入口命名
    path: path.resolve(__dirname, '../dist') // 默认就是dist文件夹
  }
}