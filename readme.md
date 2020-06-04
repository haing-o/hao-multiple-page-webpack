## 目录结构
#### 编译前（源码)
```txt
|-- webpack-demo
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- readme.md
    |-- build
    |   |-- utils.js //处理多个入口js路径和输出的多个html路径
    |   |-- webpack.common.js
    |   |-- webpack.dev.js
    |   |-- webpack.prod.js
    |-- src
        |-- common //存放有可能共同使用的js和css文件
        |   |-- css
        |   |   |-- reset.less //初始化css样式
        |   |   |-- thicss.css //共同css
        |   |-- js
        |       |-- import.js  //通过这个文件引入共同css
        |       |-- newcommon.js //存放工具函数等js代码
        |-- images
        |   |-- baidulogo.png
        |   |-- face
        |       |-- avatar.png
        |-- pages // 每个目录下文件的命名都要和目录一样
            |-- home
            |   |-- home.html
            |   |-- home.js
            |   |-- home.less
            |   |-- home_subpage // 此页面下的子页面，方便模块化
            |       |-- home_subpage.html
            |       |-- home_subpage.js
            |       |-- home_subpage.less
            |-- page1
            |   |-- page1.html
            |   |-- page1.js
            |   |-- page1.less
            |-- page2
                |-- page2.html
                |-- page2.js // 每个页面目录下一定要有html和js，可以没有css
```

#### 编译后(dist文件夹下)
```txt
-- css // 结构与html目录结构一致
    |-- import.efa5b9536b07a4db034c.css
    |-- home
    |   |-- home.efa5b9536b07a4db034c.css
    |   |-- home_subpage
    |       |-- home_subpage.efa5b9536b07a4db034c.css
    |-- page1
        |-- page1.efa5b9536b07a4db034c.css
-- images  // 结构与编译前源码的目录结构一致
    |-- baidulogo.png
    |-- face
        |-- avatar.png
-- js // 结构大致与html目录结构一致，多了一个common用于存放公共js代码
    |-- import.efa5b9536b07a4db034c.js
    |-- common
    |   |-- 0vendors.efa5b9536b07a4db034c.js
    |   |-- 6vendors.efa5b9536b07a4db034c.js
    |   |-- 7vendors.efa5b9536b07a4db034c.js
    |-- home
    |   |-- home.efa5b9536b07a4db034c.js
    |   |-- home_subpage
    |       |-- home_subpage.efa5b9536b07a4db034c.js
    |-- page1
    |   |-- page1.efa5b9536b07a4db034c.js
    |-- page2
        |-- page2.efa5b9536b07a4db034c.js
-- pages
    |-- home
    |   |-- home.html
    |   |-- home_subpage
    |       |-- home_subpage.html
    |-- page1
    |   |-- page1.html
    |-- page2
        |-- page2.html
```