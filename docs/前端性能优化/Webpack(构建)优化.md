## Webpack(构建)优化

### 优化构建速度

- 缩小文件搜索范围

	- loader 配置

		- 用include和exclude控制需要转义的范围

	- resolve.modules 配置

		- 去哪些目录下寻找第三方模块。

	- resolve.mainFields 配置

		- 第三方模块使用哪个入口文件

	- resolve.alias 配置

		- 通过别名来把原导入路径映射成一个新的导入路径。

	- resolve.extensions 配置

		- Webpack 会自动带上后缀后去尝试询问文件是否存在

- 开启多进程

	- HappyPack

		- loader 多进程

	- ParallelUglifyPlugin

		- js 压缩多进程

- 使用动态连接库

	- DllPlugin

		- 可以用呀

### 优化输出质量

- 区分不同环境
- 压缩代码

	- terser
	- css-minimizer-webpack-plugin (基于 cssnano)
	- HtmlWebpackPlugin

		- minify

- CDN接入

	- 把cdn的包配置externals

		- 排除掉这些依赖包的打包

	- 通过htmlWebpackPlugin把cdn放到html中或使用publicPath前缀

- Tree Shaking

	- webpack4我们设置mode为production的时候已经自动开启了tree-shaking
	- css的Tree-Shaking可以用purgeCSS

- splitChunk

	- entry 配置

		- 通过多个 entry 文件来实现

	- 动态加载（按需加载）

		- 主动使用import()来动态加载

	- 抽取公共代码

		- 使用splitChunks配置来抽取公共代码

- 开启gzip压缩

	- CompressionWebpackPlugin

### 拥抱webpack5，esbuild等新一代打包构建工具

- webpack5内置terser-webpack-plugin 
- webpack5内置cache 缓存机制: hard-source-webpack-plugin

	- 为模块提供中间缓存步骤
	- 加速二次构建速度

- 资源类型loader

	- asset/resource 替换 file-loader

		- 发送单独文件

	- asset/inline 替换 url-loader

		- 导出 url

	- asset/source 替换 raw-loader

		- 导出源代码

- 模块联邦

	- 允许多个 Webpack 一起工作，可以让跨应用间真正做到模块共享

*XMind: ZEN - Trial Version*