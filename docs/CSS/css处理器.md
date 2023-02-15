## css处理器

### 预处理器

- SCSS

	- sass的升级版
	- 嵌套
	- 变量

		- $

	- 导入

		- @import

	- 混合

		- @mixin @include

	- 继承

		- @extend

- less

###  后处理器

- postcss

	- 用 JavaScript 工具和插件转换 CSS 代码的工具
	- 原理

		- Postcss 会解析传入的css，将其转换为一个AST，然后通过各种不同的插件来对这个AST进行操作，最终序列化新的 css

	- 插件

		- Autoprefixer

			- 前缀补全

		- postcss-cssnext

			- 使用下个版本的css语法
