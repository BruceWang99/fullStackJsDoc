## Vue路由

### 前端路由的原理

- hash模式

	- hashchange

- history模式

	- HTML5的history api

		- pushState
		- replaceState
		- back、go、forward

### 路由的hash和history模式的区别

- hash修改的#后面的部分做为路由
- hash下只会包含#之前的url在请求中
- history api 可以记录和上次一样的URL、对象类型的数据在栈中

### vue-router 导航守卫有哪些

- 全局

	- beforeEach
	- beforeResolve

		- 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被正确调用。

	- afterEach

- 路由

	- beforeEnter

- 组件

	- beforeRouteEnter
	- beforeRouteUpdate

		- 不同路由, 渲染同一个组件的调用(组件已经挂载好了)

	- beforeRouteLeave

*XMind: ZEN - Trial Version*