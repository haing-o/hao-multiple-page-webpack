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
    |   |-- home_subpage.efa5b9536b07a4db034c.css
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
    |   |-- home_subpage.efa5b9536b07a4db034c.js
    |-- page1
    |   |-- page1.efa5b9536b07a4db034c.js
    |-- page2
        |-- page2.efa5b9536b07a4db034c.js
-- pages
    |-- home
    |   |-- home.html
    |   |-- home_subpage.html
    |-- page1
    |   |-- page1.html
    |-- page2
        |-- page2.html
```

## 默认规则
1. `Vue`和`axios`都已经配置好了，且在正式环境中使用压缩版。
2. 不是在`html`文件中通过`<img>`标签引入的图片，都必须使用`require`引入。

## 编写项目注意事项
#### html文件
1. 在`html`文件中尽量不要使用`<scirpt>`或者`<link>`标签引入静态资源，统一在目录下同名的`js`文件中使用`import`或`require`引入，方便模块化。
2. 使用`<img>`标签引入的图片文件，必须使用**相对路径**。

#### 样式文件(css, less)
1. 目前项目配置只支持`less`,`css`为后缀的样式文件。
2. 在同名的`js`文件中通过`import`引用。

#### 同名的入口js文件
1. `js`文件必须与模板`html`文件同名。
2. 在`js`文件中引用图片必须使用`require`，例如`require('../images/hot.png')`.
3. 在`js`文件中引用其他`js`文件，必须遵循模块化规则。引用样式文件时，直接引用就可以了。
4. 第三方插件尽量找到`npm`版本的引入，如果实在找不到，可以通过`exports-loader`和`script-loader`的方式引入第三方插件。（详细案例请点击[webpack 引入未模块化的本地js](https://blog.csdn.net/httguangtt/article/details/106636912))

#### 其他js文件
1. 如果是自己写的配置文件，例如`config.js`，必须遵循模块化规则，`export`导出某些东西。
2. 如果是作为一个组件文件，例如`Header.js`，在编写`html`模板遇到图片引入时，必须使用`require`的方式引入图片。（即不是在`html`文件内引入图片时都必须使用`require`）
