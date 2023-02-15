# React面试题

## 组件基础

### React 事件机制

### React高阶组件、Render props、hooks 有什么区别? 为什么要不断迭代

### 对 react fiber的理解, 它解决了什么问题?

### React 高阶组件是什么? 和普通组件的区别和适用场景

### 哪些方法会触发React重新渲染? 重新渲染rencer会做些什么?

### 对有状态组件和无状态组件的理解和适用场景

### React中什么是受控组件和非受控组件

### 类组件和函数组件有什么异同?

## 组件通信

### 父子组件的通讯方式

### 跨级组件的通讯方式

### 非嵌套关系组件的通信方式

### 组件通信的方式要哪些

## 生命周期

### React的生命周期有哪些

### 发起异步请求应该在哪个生命周期

### 性能优化的生命周期? 原理?

## 数据管理

### React setState调用的原理

### React setState调用之后发生了什么? 同步还是异步

### React中组件的this.state和setState有什么区别

### React组件中state和props有什么区别

## 状态管理

### Redux

- 对Redux的理解, 主要解决了什么问题
- Redux原理及工作流程

### Mobx

- 简单、可扩展的状态管理

	- 类似于一个全局的vue的响应式系统

- 使用

	- @observable

		- 使得类属性响应式

	- @computed

		- 定义一个计算值
		- 类似于vue中的computed

	- autorun

		- 创建一个响应式函数
		- 类似于vue3的watchEffect

	- reaction

		- 创建一个更细粒度的响应式函数
		- 类似于vue3的watch

	- @observer

		- 让组件变成响应式组件

- 区别于redux

	- redux注重不可变性, mobx注重数据的自动响应

		- redux纯函数
		- mobx基于Proxy的对象代理

	- mobx则更加灵活, redux重视状态的可预测性

		- redux单向数据流
		- mobx可以是双向数据流

## 虚拟DOM

### 对虚拟DOM的理解

### React diff算法的原理

### React与Vue的diff算法有何不同

## Hooks

### React Hook的理解, 它的实现原理是什么

### 为什么useState要适用数组还不是对象

### React Hooks 解决了哪些问题

## 路由

### React-Router的实现原理

### 路由有哪几种模式

*XMind: ZEN - Trial Version*