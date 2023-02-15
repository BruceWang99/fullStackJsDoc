## css基础

### css选择器和优先级

- 内联 > id > 类、伪类、属性选择 > 标签(元素)选择器、伪元素 > 其他

### link和@import的区别

- link

	- XHTML标签
	- 除加载CSS外, 还可以定义RSS等其他事物
	- link会和html并行加载

- @import

	- 只加载CSS
	- 在文档加载完后再被加载。

### 对盒模型的理解

- 标准盒子和IE盒子
- 四个组成部分

	- margin border padding content

- 宽和高

	- box-sizing

		- border-box

			- IE盒子
			- border+padding+content 

		- content-box

			- 标准盒子(默认)
			- 只包含content

### css3中的新特性

- CSS3选择器

	- 	:not(p)
	- input:checked	 input:disabled	
	- ::selection	

		- 元素中被用户选中或处于高亮状态

	- p:first-of-type	

		- 第一个子元素

	- p:nth-child(2)	

		- 第几个子元素

	- p:last-child

		- 最后一个子元素

- tansform 改变(动画)

	- tanslate(移动)

		- translateZ(3D转换)

	- scale(缩放)
	- rotate(旋转)

		- rotate3d (3D旋转)

	- skew(倾斜)

- transition(过渡)

	- transition: 属性名 时间 转速曲线 延迟时间;
	- 强调的是从一个状态到另一个转化的过渡效果, 只有两个状态

- animation(动画)

	- animation: 动画名(关键帧)  时间  转速曲线  延迟时间 动画播放次数 是否轮流反向播放 等
	- @keyframes
(关键帧)

		- to、from or % 
		- 每个时间点的展示效果

- 圆角

	- border-radius

- 阴影

	- 文字 text-shadow
	- 盒子 box-shadow

- 线性渐变

	- gradient

### 单行、多行文本溢出

- 单行

	- overflow

		- 容器的溢出方式

	- text-overflow: ellipsis;

		- 文字的溢出方式

	- white-space: nowrap

		- 空白是没有的
		- 文本不换行

- 多行

	- overflow
	- text-overflow
	- display: -webkit-box;

		- 显示弹性伸缩行盒子模型

	- -webkit-box-orient: vertical;

		- 盒子子元素的排列方向: 竖直的

	- -webkit-line-clamp: 3

		- 紧挨的行: 3
		- 显示3行

	- 加-webkit-兼容chrome内核的浏览器

### transition和animation的区别

- transition

	- 强调从一个状态到另一个状态的过渡效果, 只有两个状态

- animation

	- 强调的是元素的动画效果, 可以在多个帧中设置不同的状态、动画播放次数, 播放顺序等, 更加强大
	- 也可以实现transition的功能

### 对requestAnimationFrame的理解

- 用js写一些动画效果时, 可以使用setTimeout来实现动画, 更好的方法是放在 requestAnimationFrame中执行
- 优点

	- 会在浏览器每次重绘之前执行

		- 减少DOM操作
		- 有节流的作用

	- CPU节能

		- 在页面隐藏或最小化的时候会暂停

- 每一次屏幕的渲染刷新,就执行一次, 一般屏幕的刷新频次是60HZ 1秒60次 (回调函数执行次数通常与浏览器屏幕刷新次数相匹配)
- 是宏任务

	- 这个宏任务的回调会在更新渲染中执行, 页面重绘之前执行

### 隐藏元素的方法有哪些

- display

	- 不在页面中占据位置

- visibility: hidden

	- 占据空间, 不响应绑定事件

- opacity: 0

	- 占据空间, 响应绑定事件

- position:absolute

	- 移动到可视局域外
	- canvas 画图的时候用过

- z-index: 副值

	- 改变元素层叠顺序, 是别的元素挡出

- clip-path

	- 裁剪实现隐藏, 会占据空间, 没有事件

- transform:scale(0, 0)

	- 缩放实现隐藏, 占据空间, 没有事件

### display的属性值及其作用

- table  list-item inline-block inline block none

### 为什么有时候⽤translate来改变位置⽽不是定位？ 

- 不会重排和重绘
- 触发GPU加速

### CSS 优化和提高性能的方法有哪些？

- 加载性能

	- 压缩
	- css单一样式
	- 减少使用@import

		- 不能并行加载, 会在文档加载之后被加载

- 选择器性能

	- 避免使用通配规则
	- 尽量少的对标签选择, 而用class
	- 少使用后代选择器
	- 避免嵌套过深

- 渲染性能

	- 慎重使用浮动、定位
	- 尽量减少页面重排、重绘
	- 去除空标签

- 可维护性、健壮性

	- 相同属性样式抽离
	- 样式和内容分离

### css工程化的理解

- 在工程化的章节中详细说

### 什么是物理像素，逻辑像素? 

- 移动端图片使用多倍图的原因
- 物理像素

	- 设备屏幕的像素单位, 设备能控制显示的最小单位
	- 设备分辨率用的就是这个

- 逻辑像素

	- CSS里定义像素点

- 设备像素比

	- 物理像素/逻辑像素

*XMind: ZEN - Trial Version*