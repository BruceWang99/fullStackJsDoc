## babel

### Babel的原理是什么? 

- 解析 Parse

	- 将js code解析、生成AST
	- 词法分析、语法分析

		- 词法分析

			- 把字符串形式的代码转换为 令牌（tokens）

		- 语法分析

			- 在分词结果的基础上分析语法单元之间的关系，把一个令牌流转换成 AST 的形式

	- @babel/parser

- 转换 Transform

	- 遍历AST , 进⾏变换⼀系列的操作
	- 对AST进⾏添加、更新及删除等操作

		- visitor: 访问者模式
		- path对象来关联各个节点(父节点、兄弟节点等), 方便对这些节点进行操作
		- state: 代表了插件的状态，你可以通过state来访问插件的配置项

	- @babel/traverse

- ⽣成 Generate

	- 将遍历后的 AST 再转换为 JS code

		- 根据不同的节点类型拼接字符串

	- @babel/generator

### babel配置

- babel默认只做新语法的转化, 一些 js对象静态或实例的方法需要使用polyfill
- @babel/preset-env

	- 智能的preset
	- 工作原理

		- 通过一些开源项目（browserslist, compat-table, electron-to-chromium等）的数据,维护了需要支持的目标环境的哪个版本获得了JavaScript语法或浏览器特性的支持的映射，以及这些语法和特性到Babel转换插件和core-js提供的特性的映射。

- browserslist

	- 指定兼容的浏览器范围

- 配置参数

	- modules

		- amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, 默认auto

	- include

		- 一定要带的插件数组

	- exclude

		- 不要的插件数组

	- corejs

		-   推荐设置为主版本3
		- 只有在useBuiltIns为usage或entry且注入的polyfills是core-js支持的，才生效

	- useBuiltIns

		-   "usage" 

			- 根据配置的浏览器兼容和代码中用到的 API 按需添加polyfill

		-  "entry" 

			- v7.0.0 需要在入口文件手动添加 import '@babel/polyfill'
			- v7.4.0	需要在入口文件手动添加import 'core-js/stable';import 'regenerator-runtime/runtime';
			- babel会自动根据 browserslist 替换成浏览器不兼容的所有 polyfill

		- “false”

			- 不转换 js对象静态或实例的方法, 但能支持的新语法的转换

### 开发中常用babel工具

- @babel/parser

	- 前身是babylon，被招安，基于acorn解析器，主要作用生成ast

- @babel/traverse

	- 遍历并操作ast

- @babel/generator

	- 把ast转为代码

- @babel/core

	- @babel/parser、@babel/traverse集合

- @babel/types

	- 不同类型的AST节点的一些通用操作封装
	- 类似lodash那样的工具集

- @babel/template

	- 代码字符串生成 AST 模板
	- 通过模版批量生成AST, 类似组件的意思

### AST的属性

- Literal

	- 字面量
	- 数字、布尔值等

- Identifier

	- 标识符
	- 变量名、属性名、参数名等

- Statement

	- 语句
	- 可以独立执行的单位
	- if  while for break等

- Expression

	- 表达式
	- 执行完以后有返回值

- Declaration

	- 声明语句
	- 声明一个变量、函数、class、import、export 等

- Class

	- class 的语法

*XMind: ZEN - Trial Version*