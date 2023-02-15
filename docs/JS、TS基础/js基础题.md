## js基础题

### new操作符实现原理

- 创建新对象
- 原型
- 设置属性和方法

	- 巧用this

- 判断函数返回值

### 说说深拷贝和浅拷贝?

- 浅拷贝

	- 对原始值和引用类型值地址的拷贝

- 深拷贝

	- 对原始值和引用类型值完整的拷贝
	- JSON.parse(JSON.stringify());

		- 循环引用会报错
		- 引用类型数据丢失(函数 RegExp Error )
		- 特殊原始值丢失: undefined，symbol NaN Infinity

### 数组有哪些原生方法?

- push\unshift\pop\shift\concat\join\slice\splice\indexOf\ruduce\filter\map\forEach\every\some\toString

### 什么是DOM和BOM?

- DOM: 文档对象

	- 处理网页内容

- BOM: 浏览器对象

	- 浏览器交互

### js类数组对象的理解? 如何转化为数组?

- length
- 若干index属性
- arguments、DOM
- Array.from\slice\concat

### 为什么函数的arguments参数是类数组而不是数组? 如何遍历类数组?

- 没有forEach、map等方法

### ES6模块和CommonJS 模块有什么区别?

- CJS输出: 值的拷贝，ES6 输出: 值引用
- CJS加载:运行时，ES6加载: 编译时
- require(): 同步, import(): 异步

### 说说CommonJS中的 exports和module.exports

- node隐藏变量: module\exprots\require
- 默认引用地址相同

### CommonJS require 处理重复引入\循环引用?

- 不同位置 相同文件 缓存两份
- 走缓存直接读取值

### require 模块查找机制 ？

- 缓存
- node核心: fs \http\path 
- 文件模块: ./、../、/
- 自定义模块

	- 向跟路径一直找node_modules
	- package.json main
	- index.*

### 为什么 exports={} 不能直接赋值一个对象

- node隐藏变量: module\exprots\require
- exprots变量只是引用了module.exports的地址
- 重新赋值会切断和module.exports的联系

### for...in 和for...of区别

- of: 遍历键值 in: 遍历键名
- of: 遍历当前对象 in: 遍历整个原型链
- of: 所有可迭代对象 in: 普通对象

### 如何使用for...of遍历对象 

- 添加[Symbol.iterator]属性
- 手写代码

### JS为什么要变量提升? 影响?

- 提高性能

	- 解析和预编译阶段
	- 预先为变量分配栈空间

- 容错性更好

	- 不规范的代码

### js脚本延迟加载的方式有哪些?

- defer

	- 加载并且解析完成前会阻止 DOMContentLoaded
	- DOMContentLoaded事件前执行

- async

	- 加载好立即执行

- 动态创建DOM
- JS 最后加载

### Ajax理解? 实现?

- 异步通讯 局部刷新
- 手写代码

### 什么是尾调用? 好处?

- 函数的执行的最后一步是调用另一个函数。
- 只保留内层函数的调用记录
- 节省内存
- 尾递归

### escape、encodeURI、encodeURIComponent区别

- escape(废弃)

	- 字符串
	- 字符的16进制格式值

- encodeURI

	- 完整URI
	- 除了 A-Z a-z 0-9 - _ . ! ~ * ' ( )
	- 除了; , / ? : @ & = + $
	- 除了#

- encodeURIComponent

	- URI 的组成部分
	- 除了 A-Z a-z 0-9 - _ . ! ~ * ' ( )

### 常见的DOM操作有哪些?

- querySelectorAll
- createElement
- removeChild
- insertBefore
- appendChild

*XMind: ZEN - Trial Version*