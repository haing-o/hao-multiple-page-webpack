## 目录结构
#### 编译前（源码)
```txt
-build
  -utils.js //处理多个入口js路径和输出的多个html路径
  -webpack.common.js
  -webpack.dev.js
  -webpack.prod.js
-dist
-node_modules
-src
  -pages
    -home // 每个目录下文件的命名都要和目录一样
      -home.html
      -home.js
      -home.less
      -home_subpage // 此页面下的子页面，方便模块化
        -home_subpage.html
        -home_subpage.js
        -home_subpage.less
    -page1
      -page1.html
      -page1.js
      -page1.less
    -page2
      -page2.html
      -page2.js // 每个页面目录下一定要有html和js，可以没有css
  -images
    -face
      -avatar.png
    -baidulogo.png
  -common //存放有可能共同使用的js和css文件
    -js
      -import.js //通过这个文件引入共同css
      -newcommon.js //存放工具函数等js代码
    -css
      -reset.less //初始化css样式
      -thicss.css //共同css
.gitignore
.package-lock.json
.package.json
.postcss.config.js
```

#### 编译后(dist文件夹下)
> 会在js与css文件后缀加上一定的随机hash防止缓存，这里为了看起来整齐暂时没有写出来。
```txt
-css // 结构与html目录结构一致
  -home
    -home_subpage
      -home_subpage.css
    -home.css
  -page1
    -page1.css
-images // 结构与编译前源码的目录结构一致
  -face
    -avatar.png
  -baidulogo.png
-js // 结构大致与html目录结构一致，多了一个common用于存放公共js代码
  -common
    -0vendors.js
  -home
    -home_subpage
      -home_subpage.js
    -home.js
  -page1
    -page1.js
  -page2
    -page2.js
  -import.js
-pages
  -home
    -home_subpage
      -home_subpage.html
    -home.html
  -page1
    -page1.html
  -page2
    -page2.html
```