## webpack

### 模块化打包的原理

- 在处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

### webpack的构建流程? 

- 初始化参数

	- 从配置⽂件和 Shell 语句中读取与合并参数，得出最终的参数

- 开始编译

	- 初始化 compiler 对象
	- 注册所有配置的插件
	- 调用compiler对象的 run ⽅法进行编译 

- 确定入口

	- 根据配置文件中entry 找到所有入口

- 编译模块

	- 从入口文件出发，调用所有配置的 Loader 对模块进行翻译
	- 找出该模块依赖的模块
	- 递归本步骤, 直到所有入口依赖的文件都经过了本步骤的处理

- 完成模块编译

	- 得到了每个模块被翻译后的最终内容以及它们之间的依赖关系

- 输出资源

	- 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk
	- 把每个 Chunk 转换成一个单独的文件加入到输出列表

- 输出完成

	- 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

### webpack 热更新的实现原理？ 

- 关键点: 1、两端都有hmr运行时 2、通过websocket通信
- 有配置热更新时, 会在客户端自动注入hmr运行时 (以webpack-dev-server启动开发服务为例)
- 服务启动后, websocket会和浏览器建立连接
- 当修改了代码, webpack具有watch的能力, 开始进行增量编译
- 编译完成, webpack就触发websocket, 向浏览器发起更新通知, 会传递更新文件的hash 
- 浏览器hmr运行时响应websocket, 通过请求一个mainfest去了解更新的数据, 再加上拿到的hash, 就拼接出更新的文件, 在替换调原来的文件

### bundle，chunk，module是什么？

- bundle (捆)

	- 是由webpack打包出来的⽂件；
	- 打包结果的代码块

- chunk (大块)

	- 个chunk由多个模块组合⽽成，⽤于代码的合并和分割；

- module

	- 是开发中的单个模块
	- 在webpack中，⼀切皆模块，⼀个模块对应⼀个⽂件

### hash的类型和区别

- hash

	- 项目级hash,项目中有文件变动, hash就会更改

- chunkhash

	- 大块级hash, chunk, 一般是几个module合并的, 一个chunk的文件, hash不变

- contenthash

	- 只要输出的bundle文件不变, hash就不变

### Loader和Plugin的不同？ 

- Loader

	- 用于对module的源代码进行转换
	- 让webpack拥有了加载和解析⾮JavaScript⽂件的能⼒
	- 在 module.rules 中配置

		- 对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ）

- Plugin

	- 用于解决 loader 无法实现的其他事
	- 扩展webpack的功能，让webpack具有更多的灵活性
	- 在 plugins 中单独配置

		- 每⼀项是⼀个 plugin 的实例，参数都通过构造函数传⼊

### 编写loader或plugin的思路？

- loader

	- 编写Loader时要遵循单⼀原则，每个Loader只做⼀种"转义"⼯作
	- 每个Loader的拿到的是源⽂件内容（source）
	- 通过返回值的⽅式将处理后的内容输出，也可以调⽤ this.callback() ⽅法，将内容返回给webpack

- plugin

	-  webpack在运⾏的⽣命周期中会⼴播出许多事件，Plugin 可以监听这些事件
	- 在合适的时机通过 Webpack 提供的 API 改变输出结果

### 怎么配置单⻚应⽤？怎么配置多⻚应⽤？ 

- 单⻚应⽤

	-  entry 中指定单⻚应⽤的⼊⼝

- 多⻚应⽤

	- 多entry

		-  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
  }

	- 多html

		- plugins: [
    new HtmlWebpackPlugin({ 
      filename: 'pageOne.html',
      template: 'src/assets/pageOne.html'
    }),
new HtmlWebpackPlugin({ 
      filename: 'pageTwo.html',
      template: 'src/assets/pageOne.html'
    })]

### webpack、gulp、rollup、parcel、vite区别和适用场景

- gulp

	- 基于任务运行的流水线式打包

- 模块化打包

	- webpack

		- 适用于大型复杂的前端站点构建
		- 让浏览器可以兼容cjs和esm语法

			- 有代码注入

	- rollup

		- 适用于js库的打包或 高版本无需往下兼容的浏览器应用程序
		- 默认开发者使用esm写模块

			- tree-shaking删除无用代码
			- 打包的代码非常干净，无注入代码

		- cjs原生不支持, 需要增加插件

	- vite

		- 适用于不考虑兼容老浏览器的应用程序
		- dev开发

			- vite提供dev服务器，以及比webpack快的多的热更新

		- prd生产

			- 实际上用的就是rollup

	- parcel

		- 适用于简单实验性项目
		- 零配置运行

### 常见的Loader

- loader的执行顺序是从右向左执行的
- babel-loader

	- presets
	- plugins

- style-loader

	- 添加css到style标签中

- css-loader

	- 解释(interpret) @import 和 url()
	- options: importLoaders: 1

		- 引入上一个loader处理

- postcss-loader

	- 使用postcss处理CSS
	- postcss.config.js

		- postcss-preset-env(预设)

			- autoprefixer

	- 类babel, 处理css兼容性、单位转化等

- sass-loader

	- 把sass转成css

- vue-loader

	- .vue解析,翻译成html css js

### 常⻅的Plugin

- UglifyjsWebpackPlugin

	- 压缩js

- CopyWebpackPlugin

	- 复制文件或目录

- DefinePlugin

	- 配置的全局常量

- DllPlugin

	- 动态连接库
	- 常用但又构建时间长的代码提前打包好
	- 后面再打包的时候就跳过原来的未打包代码，直接用 dll

- HtmlWebpackPlugin

	- 简化了HTML文件的创建

- MinChunkSizePlugin

	- 合并小于 minChunkSize 大小的 chunk，

- SplitChunksPlugin

	- 拆分chunks

*XMind: ZEN - Trial Version*