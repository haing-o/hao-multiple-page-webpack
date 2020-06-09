const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 分离css代码
const webpackMerge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const webpack = require('webpack')
const utils = require('./utils') // 多页面输入和输出配置

const commonConfig = {
  // 默认的chunk name就是main
  entry: {
    'import': path.resolve(__dirname, '../src/common/js/import.js'),
    ...utils.entries()
  },
  module: {
    rules: [
      // 入口js文件中出现的才会打包过来
      // file-loader找到文件放到dist文件里并改名
      // url-loader除了有上述功能，还可以把文件打包为base64
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[folder]/[name].[ext]',
            // 输出路径
            outputPath: (url, resourcePath, context) => {
              return `images/${url}`;
            },
            // 访问资源路径
            publicPath: (url, resourcePath, context) => {
              return `${path.relative(context, 'images/').split(path.sep).join('/')}/${url}`;
            },
            context: 'src/images',
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
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 文件内@import引入的另一个样式文件，也要先通过css-loader前的2个loader编译
              // modules: true // 模块化-类名会变为hash
            }
          },
          'postcss-loader',
          'less-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 文件内@import引入的另一个样式文件，也要先通过css-loader前的2个loader编译
              // modules: true // 模块化-类名会变为hash
            }
          },
          'postcss-loader']
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: require.resolve('../src/common/js/aliplayer/aliplayer-min.js'),
        loader: 'exports-loader?window.Aliplayer!script-loader'
      },
      {
        test: require.resolve('../src/common/js/aliplayer/aliplayercomponents.js'),
        loader: 'exports-loader?window.AliPlayerComponent!script-loader'
      }
    ]
  },
  // plugins可以帮助webpack在某一个时刻做一些事情
  plugins: [
    // 打包结束后自动生成html文件，并引入js
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    //   filename: 'index.html',
    //   chunks: ['main']
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].chunk.css'
    })
  ].concat(utils.htmlPlugin()),
  optimization: {
    // Tree Shaking 只对ES Module起作用
    // package.json中的sideEffects可以添加忽略项(不管是否引用都打包)
    // 测试环境下不会真正删除代码，只会提示 正式环境下才会彻底删除没用到的代码 减少代码量
    usedExports: true,
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
      name: false, // 使用webpack自动生成的文件名 false时会使用数字
      // 缓存组 把符合的放在同一个组里
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 是否在node_modules里
          priority: -10,
          filename: 'js/common/[id]vendors.[hash].js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true, // 复用之前打包过的代码，不会重复打包
          filename: 'js/common/[id]bundle.[hash].js'
        }
      }
    }
  },
  output: {
    // publicPath: 'http://cdn.com', // 用于在js文件前加公用前缀
    globalObject: 'this',
    filename: 'js/[name].[hash].js', //[name]代表直接使用入口文件命名
    chunkFilename: '[name].chunk.js', // 非入口chunk的命名
    path: path.resolve(__dirname, '../dist') // 默认就是dist文件夹
  }
}

module.exports = (env) => {
  if(env && env.production) {
    return webpackMerge(commonConfig, prodConfig);
  }else {
    return webpackMerge(commonConfig, devConfig);
  }
}