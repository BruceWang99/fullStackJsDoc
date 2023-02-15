## ES.next 

### 

- 块级作用域

	- 变量覆盖问题
	- 用于计数的循环变量泄漏为全局变量问题

- 暂存性死区

	- 声明前不可用

		- var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}

- 初始值设置:const
- 指针指向

	- const指向的那个内存地址不能变

		- 引用数据类型存放在堆区, 仍然可以改变到其属性的地址或值

- 变量提升:var
- 重复申明:var
- 给全局添加属性:var

### 箭头函数和普通函数区别?

- 简洁
- this
- 构造函数
- arguments对象
- prototype
- generator

### 谈谈你对ES6的proxy的理解？

- 对象代理器
- new Proxy(target, handler)
- handler对象的get和set属性
get(target, key, receiver)

	- receiver: Proxy或者继承Proxy的对象
	- 返回 true 代表属性设置成功

- Reflect搭配使用

	- 避免this指向问题
	- Reflect.get(target, prop, receiver)

### 说说Reflect?

- 对对象做一些操作的静态类(和Proxy的handler中方法一样)

	- Reflect.get(target, key, receiver)

- 把以前js各种不同格式操作对象做了统一

### 对rest参数理解?(扩展运算符)

- 整合成数组
- 获取剩余参数

	- 只能放最后一位

### ES6模版语法与字符串处理?

- 空格、缩进、换行被保留
- 支持运算${} 
- includes\startsWith\endWith\repeat

### map、weakMap和object区别?

- 键的类型

	- Map: 任意值
	- Object:  String 或Symbol

- 键的顺序

	- Map: 有序
	- Object: 无序

- Size
- iterable
- 意外的键

	- Map: 默认没有任何key
	- Object: 原型 可替换

- 性能

	- 频繁操作map更佳

- WeakMap 只接受对象作为键名
- WeakMap键值(弱引用) 值可能在任何时刻被回收。

### 说说js的装饰器

- 在不修改原来的代码情况下, 来装饰类或者方法
- 基本使用

	- const changeParams = () => {
  return (target, name, desc) => {
    const fun = desc.value   //保存源方法
    desc.value = function (params) {
      let translate = params.toUpperCase()   //修改参数，大小写转换
      return fun(translate)   // 返回要运行的方法
    }
  }
}

		- target

			- 装饰的方法的类本身

		- name

			- 装饰的方法名称

		- desc (PropertyDescriptor)

			- 可以理解为Object.defineProperty()

	- class myClass {
  @changeParams()    //这里使用装饰器！
  getList1(params) {
    console.log('params', params)
    return params
  }
}

- 装饰器类型

	- 类装饰器
	- 方法装饰器
	- 属性装饰器
	- 参数装饰器
	- 访问器的装饰器

		- get set 关键字定义的方法
		- TypeScript不允许同时装饰一个成员的get和set访问器
