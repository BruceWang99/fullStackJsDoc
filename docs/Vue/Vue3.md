## Vue3

### Vue3.0有什么更新

- composition api
- teleport

	- 把dom传送到指定的位置
	-  UI 和相关行为封装到组件中的思想

- 片段

	- 可以有多个根节点

- 自定义渲染器(createRenderer API)

	- 用做跨平台

- `<style>`

	- `v-bind`
	- `::v-global(.foo) {}`

		- 全局样式

	- `::v-slotted(.foo) {}`

		- 插槽样式

- 全局和内部 API 已经被重构为支持 tree-shake

	- 没有用到的代码不被打包

- emits

	- props 选项类似, 事件需要声明

### defineProperty和proxy的区别

- 监听主体

	- defineProperty针对的是某个属性
	- proxy 是tartget的所有属性

- 监听效果

	- defineProperty对象的赋值、删除等操作不能监听
	- defineProperty数组下标的赋值、数组长度的变化不能监听
	- proxy还支持监听Map、Set其他数据类型

### 说下Vue3 Composition API

- 动机

	- 在组件之间复用状态逻辑很难
	- 复杂组件变得难以理解
	- minix 与组件之间存在隐式依赖，可能产生冲突。
	- 高阶组件 多层包裹嵌套组件，增加了复杂度和理解成本
	- Render Props 使用繁琐，不好维护, 代码体积过大，同样容易嵌套过深

- 优点

	- 相同逻辑代码的复用
	- 减小了代码体积
	- 没有 this 的烦恼

- setup

	- 在组件被创建之前，props 被解析之后执行

		- 晚于 beforeCreate 钩子，早于 created 钩子被调用

	- 入参: props、context
	- 类型推断

		- defineComponent

- 生命周期钩子

	- onX函数

		- onMounted onUpdated onUnmounted

- provide 和 inject 启用依赖注入
- getCurrentInstance 支持访问内部组件实例。

### Composition API 与 React Hook的区别

- 使用场景

	- React Hooks只能用在函数组件中
	- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
	- Composition 围绕一个新的组件选项 setup 而创建

- 原理

	- React Hook 底层是基于链表实现，调用的条件是每次组件被 render 的时候都会顺序执行所有的 Hooks
	- Composition 基于proxy的响应数据绑定

- 代码执行

	- React Hooks 会在组件每次渲染时候运行
	- setup() 只在组件创建时运行一次

- 声明状态

	- React Hooks 的useState

		- 可以向调用中传入一个初始值作为参数
		- 如果初始值的计算代价比较昂贵，也可以将其表达为一个函数，就只会在初次渲染时才会被执行

	- Vue的 ref 和 reactive

		- ref() 返回一个反应式对象，其内部值可通过其 value 属性被访问到, 可以将其用于基本类型，也可以用于对象
		- reactive 只将一个对象作为其输入并返回一个对其的响应式对象

- 跟踪依赖(副作用)

	- react

		- useEffect

			- 允许在每次渲染之后运行某些副作用
			- 下次执行回调之前或当组件卸载时运行一些清理工作

		- useMemo

			- 在某个依赖项改变时才重新计算 memoized 值

		- useCallback

			- 在某个依赖项改变时, 该回调函数才会更新

	- vue

		- watch

			- 侦听特定的数据源，并在单独的回调函数中执行副作用
			- 惰性调用-回调仅在侦听源发生变化时被调用

		- watchEffect

			- 立即执行传入的一个函数
			- 同时响应式追踪其依赖，并在其依赖变更时重新运行该函数

		- computed

			- 计算属性, 并在其依赖变更时重新返回值

- 生命周期

	- react hooks

		- 使用 React Hooks 时停止从生命周期方法的角度思考，而是考虑副作用依赖什么状态，才更符合习惯
		- componentDidMount
		- componentDidUpdate
		- componentWillUnmount

	- vue

		- onX函数

- 自定义代码

	- 都是使用use开头的js函数

- 获取组件或者DOM

	- react

		- useRef

	- vue

		- ref

###  reactivity 实现原理

- 就是vue3的响应式原理

### Vue3初始化的流程

- createApp部分

	- baseCreateRenderer().createApp()进行创建实例

		- 实例是一个有mount等方法的对象

- app.mount()部分

	- 基于根组件创建 vnode(createVNode)
	- 调用 render方法

		- 把vnode转化为真实dom,然后绑定到rootContainer上。

### vue3 编译优化

- 事件缓存

	- 在首次编译中, 缓存函数缓存绑定的方法, 后面可以直接从缓存中调用事件

- 静态节点提升

	- 在diff的过程中, 只需要对比动态节点

- 动态节点标记

	- 动态节点增加了 patch flag, 用来标记节点的类型和属性等, diff的过程中, 可以缩小范围

-  增加了fragment标签

	- ,可以在组件中没有唯一根节点时, 作为根节点, 减少了无用的标签

### Vue 3.0 性能提升主要是通过哪几方面体现的？

- 响应式系统
- 编译优化
- 代码体积

	- Vue3对Tree-shaking的支持更好, Tree-shaking依赖ES module(export, import),通过编译时的静态分析, 找到没有引入的模块, 打包的时候, 直接过滤掉, 很多按需引入的组件和功能

*XMind: ZEN - Trial Version*