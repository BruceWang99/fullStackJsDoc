## Vue基础

### Vue的基本原理

- MVVM
- 响应式原理
- 模版编译原理

### MVVM、MVC、MVP的区别

- MVC

	-  Model(存储页面的业务数据)、View (视图)和 Controller( View 层和 Model 层的纽带, 负责用户与应用的响应操作)

- MVVM

	- Model(数据模型)、View(视图)、ViewModel(监听Model中数据的改变并且控制视图的更新)

- MVP

	- MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller

		- 使用 Presenter 来实现对 View 层和 Model 层的解耦

### Vue 首次渲染过程

- 把实例的生命周期、Vue事件、渲染的 一些属性初始化

	- initLifecycle(vm)
initEvents(vm)
initRender(vm)

- 执行创建前钩子(beforeCreate)
- 初始化实例状态 比如data、watch、computed、methods等

	- 这里可以说vue的响应式系统

- 执行钩子(created)
- 把模版转化为render函数

	- 这里可以说Vue的编译原理

		- 解析
		- 优化
		- 生成

- 执行beforeMounted
- 虚拟DOM的解析并生成真实dom

	- 调用render函数, 生成虚拟dom
	- 调用patch函数对比新旧节点更新差异

		- 把变化的Vnode更新到真实的DOM树 (createEle)

	- 这里可以说diff算法

- 执行Mounted

### 双向数据绑定原理

- vue2

	- 数据代理

		- Observer

			- 深层代理数据

				- 递归

			- Object.defineProperty

				- configurable

					- 该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。

				- enumerable

					- 会出现在对象的枚举属性中

			- 用get和set方法监听对象属性的变化

				- get时依赖收集
				- set时通知更新

	- 观察者模式

		- Dep

			- 发布者
			- 每个属性放一个Dep实例

		- Watcher

			- 观察者
			- 创建时订阅发布者

				- Dep.target

			- 更新视图

- vue3

	- 表现和大致原理基本相同
	- 剥离出一套完整的响应式系统, 可以脱离框架使用
	- 数据代理

		- ES6的Proxy实现

			- 避免了vue早期版本的问题

	- 收集依赖

		- track

			- targetMap

				- 存储整个响应式目标的依赖

			- depsMap

				- 存储很多个不同依赖的空间

			- dep(Set)

				- 存储相同依赖的不同位置, 都是一个独一不二的值

	- 触发更新

		- trigger

			- 对应的targetMap中的depsMap的dep
			- 遍历所有的回调函数

	- 响应式主要的api

		- reactive

			- 类似放在template中data的响应式

		- ref

			- 可以给原始值加响应式
			- 对象直接走reactive

		- toRefs

			- reactive中的属性转ref
			- 解构reactive很适用

		- readonly

			- 防止更改响应式对象

		- watchEffect

			- 立即执行传入的一个函数，同时响应式追踪其依赖

### Vue模版编译原理

- vue模版转化为render函数的过程

	- 解析parse

		- 正则表达式对template字符串进行解析
		- 生成抽象语法树AST

	- 优化optimize

		- 遍历AST, 静态节点标记, 方便diff时, 跳过静态节点

	- 生成generate

		- AST转化为render函数字符串

- webpack的vue-loader

	- 把单文件组件中的template script style 分开处理
	- 加上webpack会其他文件的处理
	- 把template转成render函数的代码, script生成Vue实例组件, style与当前组件关联和其他组件隔离

### v-if、v-show、v-html的原理

- v-if

	- 调用addIfCondition标记元素, 生成vnode的时候忽略对应节点, 页面上就不会渲染

- v-show

	- 会生成vnode,也会渲染成真实节点, 并在渲染中修改display的值

- v-html

	- 先移除节点下的所有节点, 调用html方法添加inder HTML属性

### v-model是如何实现的, 语法糖实际是什么

- 表单元素

	- 动态绑定value属性
	- input事件触发响应数据的修改

- 组件

	- 通过prop和$emit实现
	- 默认利用名为value的prop和名为input的事件
	- 自定义绑定prop和event

		- 配置model属性

### $nextTick原理及作用

- 作用

	- 回调延迟到下次 DOM 更新循环之后执行

		- 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构时
		- 在created()钩子进行DOM操作

- 原理

	- 对JavaScript EventLoop的一种应用
	- Promise.then()

		- 微

	- MutationObserver

		- 微
		- 创建一个dom节点, 在这个节点变化时, 执行回调

	- setImmediate

		- 宏
		- node\IE
		- 在浏览器完成后面的其他操作后, 立刻执行这个回调函数

	- setTimeout(fn, 0)

		- 宏

### keep-alive实现原理及作用

- 作用

	- keep-alive用于保存组件的渲染状态，避免组件反复创建和渲染，有效提升系统性能

- 原理

	- LRU 缓存淘汰算法

		- 保护最近被访问/使用过的数据，淘汰现阶段最久未被访问的数据
		- 使用 hashMap + 双向链表

	- max 限制缓存表的最大容量
	-  include/exclude条件匹配是否缓存
	- 根据组件 ID 和 tag 生成缓存 Key , 并在缓存对象中查找是否已缓存过该组件实例, 如果存在,直接取出缓存值并更新该 key 在 this.keys 中的位置
	- 获取节点名称，或者根据节点 cid 等信息拼出当前 组件名称
	- 获取 keep-alive 包裹着的第一个子组件对象及其组件名

### 使用Object.defineProperty来进行数据劫持有什么缺点(监听失败)

- 对于对象 property 的添加或删除
- 数组使用索引直接设置值
- 修改数组的长度

### computed和watch的区别

- computed

	- 基于它们的响应式依赖进行缓存
	- 不支持异步
	- 可以设置get,set

- watch

	- 不支持缓存
	- 支持异步
	- 可以设置立即触发和深度监听

### computed和Methods的区别

- computed

	- 基于它们的响应式依赖进行缓存
	- 可以设置get,set

- Methods

	- 调用执行一个函数

### 简述mixins、extends的覆盖逻辑

- 区别

	- mixins

		- 接收一个混入对象的数组
		- 合并的仅仅是options

	- extends

		- 接收一个对象或构造函数

	- Vue.extend

		- 创建一个“子类”
		- 继承自vue
		- mergeOptions选项合并

- mixin 和 extends均是用于合并、拓展组件的，两者均通过 mergeOptions 方法实现合并
- 生命钩子、watch先执行mixins 和 extends的, 再执行组件的
- data、props、computed等只合并自己有的组件没有的

### 对SPA单页面的理解, 它的优缺点分别是什么?

- 优点

	- 页面加载快, 避免了不必要的跳转和重复渲染
	- 前后端分离, 解耦前后端逻辑
	- 有更类似于原生页面的体验

		- 路由
		- 过渡动画

- 缺点

	- 首次加载时间长, 白屏问题
	- SEO能力弱

### Vue和React的理解, 他们的异同?

- 相同

	- 都属于声明式而非命令式的框架或库

		- 声明式注重结果
		- 命令式注重过程

	- 组件化
	- 跨平台

		- 都使用了Virtual DOM + Diff算法

- 区别

	- 定位

		- vue 渐进式 JavaScript 框架

			- 由浅入深, 易学易用

		- react 构建UI的 javascript库

			- 聚焦构建UI

	- 设计思想(运行时、编译时)

		- React  重运行时

			- JSX通过babel转换为React.createElement, 执行后生成jsx对象
			- 经过Scheduler的调度, 把任务优先级排序

				- requsetIdlCallback

			- 在Reconciler的调解, 比较jsx和当前Fiber节点的差异

				- diff对比

			- 经过Renderer的处理, 这些副作用应用到真实节点

		- vue 编译时 + 运行时

			- 把模版编译成render函数体(放在vue的核心中)
			- 调用render函数, 生成虚拟DOM
			- 对比DOM节点, 更新差异到页面

		- Svelte 重编译时

			- 直接把HTML字符串编译成命令式代码

	- 数据更新

		- vue 靶向更新, 精确到组件级别而不会更新该组件内的子组件

			- 每个组件都有自己的渲染 watcher，它掌管了当前组件的视图更新，但是并不会掌管 ChildComponent 的更新

		- react自顶向下的进行递归更新

			- React 中假如 ChildComponent 里还有十层嵌套子元素，那么所有层次都会递归的重新render
			- 遵从Immutable的设计思想，永远不在原对象上修改属性
			- 优化

				- React 创造了Fiber，创造了异步渲染
				- memo和shouldComponentUpdate这些优化手段

	- template和JSX

		- Vue

			- 偏视觉的组件用template
			- 偏逻辑的组件用JSX

		- React

			- 灵活

	- diff算法实现

		- 思想相同

			- 子主题 1

	- 事件机制

- 选型

	- vue

		- 在开发效率和普通业务逻辑的项目更优
		- 在性能上有追求, 又不想过多处理的项目更优

	- react

		- 有更为复杂业务逻辑和复用问题的项目更优
		- 有更优秀的技术团队和经验者更优
		- 想在代码上更好的创造力上更优

	- 对于有vue 和react的开发老鸟以上可以忽略

### Vue性能优化有哪些?

- 编码阶段

	- 有效使用响应式数据
	- key保证唯一
	- 使用v-show复用DOM
	- 路由和图片懒加载
	- keep-alive缓存页面
	- 长列表滚动到可视区域动态加载
	- 事件的销毁
	- 第三方插件按需引入
	- 变量本地化

- 打包优化

	- 压缩代码
	- Tree Shaking
	- CDN加载第三方模块
	- 多线程打包happypack
	- splitChunks抽离公共文件
	- sourceMap优化

- 用户体验

	- 首屏加载优化

		- 骨架屏
		- loading

	- 页面离线化

		- Service Workers

- SEO优化

	- SSR

### Vue复用逻辑的方式和使用场景

- composition

	- 相同功能的业务逻辑抽离

- mixin

	- 不同组件或功能的逻辑抽离

- 自定义指令

	- 和DOM操作有关的逻辑抽离

- teleport

	- 将 UI 和相关行为封装到组件中来构建 UI
	- 把dom传送到指定位置

- render函数/JSX

	- 发挥组件的高度灵活性

- 插件

	- 独立的项目级的功能复用

### slot原理是什么

- 原理

	- 当子组件vm实例化时，获取到父组件传入的slot标签的内容，存放在vm.$slot中
	- 当组件执行渲染函数时候，遇到slot标签，使用$slot中的内容进行替换

- vm.$slots

	- vm.$slots.default()

		- 默认插槽

			- v-slot:default

	- vm.$slots.name()

		- 具名插槽

			- v-slot:header

- vm.$slots.scopedSlots() 

	- 作用域插槽

		- v-slot:scopedSlots="{name:  'bruce'}"

### template和jsx有什么区别?

- 编译器

	- vue template的编译工具是放在了vue的核心库中,
	- facebook 定义了这个语法扩展, 编译解析交给生态来做

- 灵活度

	- jsx像js 一样灵活
	- template只能通过指令、事件、插值来填充模版

- 直观性

	- template 更加直观

### 如何保存页面的当前状态

- 组件会被卸载

	- 将状态存储在LocalStorage / SessionStorage
	- 路由传值
	- 状态管理

- 组件不会被卸载

	- keep-alive
	- 切换部分写成子组件

### 常见的事件修饰符和作用

- .stop

	- event.stopPropagation()

- .prevent

	- event.preventDefault()

- .self

	- 从自身元素触发

- .once

	- 只触发一次回调

### 对SSR的理解

- 服务端渲染, Vue在客户端把标签渲染HTML的工作放在服务端完成, vuessr框架有Nuxt、Vite SSR
- 优势

	- 更好的SEO
	- 首页加载速度更快

- 缺点

	- 需要服务器端node运行环境
	- 增加了服务器的占用资源
	- 生命周期方法只有 beforeCreate 和 created 钩子

- Nuxt

	- asyncData方法 异步获取或处理数据。

*XMind: ZEN - Trial Version*