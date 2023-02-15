---
sidebar_position: 6
---
## css模块化

### CSS 命名实现模块化

- BEM

	- block, element, modifier，分为为 块层、元素层、修饰符层
	- 使用__两个下划线将块名称与元素名称分开
	- 使用--两个破折号分隔元素名称及其修饰符
	- 一切样式都是一个类，不能嵌套。

- SMACSS

	-  Base(基础) > Layout(布局) > Module(模块)  > State(状态) > Theme(主题)

		- BEM类似的复杂版本

	- 基础（Base）规则里一般放置默认样式
	- Layout 很贴近 HTML 标签，作为网站的骨架，负责布局
	- 模块（Module） 是我们的设计当中可重用，可模块化的部分
	- 维护 state 来操作动态变化
	- Theme是定义公共类名, 颜色、形状、边框、阴影等

- OOCSS

	- 面向对象编写出可扩展、可维护的 CSS

- AMCSS

	- 基于属性控制
	- 例: <div am-button="large blue">Button</div>

	- 属性选择器的性能和类名相比差别很大

### CSS in JS

- 将css样式写在JavaScript文件中, React社区的热度比较高。

### CSS in Module

- 通过构建工具的帮助，可以将 class的名字或者选择器的名字作用域化。
- vue官方默认的模式
