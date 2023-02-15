# HTML

## src和href的区别

### src

- source 的缩写
- 用于替换当前元素
- 解析时, 会暂停其他资源处理

	- js脚本要放在底部的原因

### href

-  Hypertext Reference (超文本引用)的缩写
- 只是把当前文档和引用的资源之间建立联系
- 会并行下载资源, 不会停止对文档处理

	- 建议使用link方式加载css 的原因,而不是@import

## 对HTML语义化的理解

### 选择合适的标签放相关标签的内容

### 利于SEO

### 增加代码可读性

## script标签中defer和async的区别

### defer

- 文档元素解析之后执行
- 在DOMContentLoaded之前执行

### async

- 下载完就执行

## HTML5中的更新

### 语义化标签

- header footer section nav aside article 

### 媒体标签

- vedio audio

### 表单

- email number time search

### DOM操作

- document.querySelector
- document.querySelectorAll

### 本地存储

- localStorage sessionStorage

### 路由

- window.history

### 绘图

- canvas

### web开头

- web worker web socket web GL(这个应该不算) 

## 行内元素有哪些 块状元素有哪些 空元素有哪些 

### 行内

- span em i a input select 

### 块状

- div ul ol li p h 

### 空元素(没有闭合的)

- img input link meta br hr

## DOCTYPE(文档类型)的作用

### 用什么类型来解析文档 (html xhtml)

### <!doctype html>

- 用最新的HTML标准解析页面
- 不写会进入混杂模式

## 常用的meta标签哪些

### charset

- UTF-8等

### viewport

- 适配移动端
- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
- 配置文档宽度、缩放比例这些

### seo优化相关的

- keywords
- description

## 说下web worker

### 后台运行的js

### 不阻塞主线程

### 和主线程通讯

- postMessage

## Canvas和SVG的区别

### SVG

- 可缩放的矢量图形

	- 不失真

- 大小更小
- 可区域点击

	- xml iframe 获取dom

### canvas

- 画布
- 用js绘制图形

## head标签有什么用, 其中什么标签必不可少

### 定义文档的头部

###  <title> 定义文档的标题 唯一必需的元素

## HTML5的离线储存怎么使用, 它的工作原理是什么

### manifest方案已经废弃

### Service Worker和cacheStorage缓存方案

- Service Worker

	- 浏览器与网络（可用时）之间的代理服务器
	- 新线程
	- HTTPs

- cacheStorage

	-  Cache 对象的存储
	- 它提供了一个 ServiceWorker 、其它类型worker或者 window 范围内可以访问到的所有命名cache的主目录

- 套路

	- 注册

		- register

	- 缓存

		- install

	- 缓存更新

		- activate

	- 捕获请求并返回缓存数据

		- fetch

## 说下HTML5 drag API

### dragstart

- 开始时

### drag

- 正在拖放

### dragenter

- 进入某元素时

### dragover

- 拖放在某元素内时

### dragleave

- 移出目标元素时

### dragend

- 拖放结束时

### app webview内不支持

- 可使用touchstart  touchmove touchend代替

*XMind: ZEN - Trial Version*