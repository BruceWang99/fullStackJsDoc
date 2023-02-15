## TypeScript

### 配置

- 如何设置模块导入的路径别名？
-  tsconfig.json 中有哪些配置项信息？

### 比js多出的基础类型

- 元组 Tuple(数组的细分)

	- 已知元素数量和类型的数组

- 枚举 enum

	- 一组有名字的数值

		- enum Color { red=2, black=4}

	- 默认从0递增
	- 支持名字找数 数找名字
	- 常量枚举,直接编译成常量

- 任意值 any

	- 不清楚类型的变量
	- any基本上放弃了任何类型检查.

- unknown 类型

	- 所有类型都可以赋值给unknown
	- 只能被赋值给 any和unknown 

- 空值 void

	- undefined和null

- 永不存在的值 never

	- 抛出异常
	- 不会有返回值的函数

- Null 和 Undefined

	- 默认是所有类型的子类型
	- strictNullChecks

		- void和本身

### 接口 interface

- 抽象方法的集合

	- 描述较为复杂数据结构

- 可选属性
- 只读属性
- 多余属性检查

	- 断言
	- 添加字符串索引签名

- 接口使用

	- 函数

		- 构造函数的类型

			- new

	- 索引类型

- 继承
- 混合类型接口

	- 既是对象又是函数(有属性)

### 泛型

- 使用一些以后才指定的类型，并在实例化时作为参数指明这些类型的一种定义数据类型的方式
- 多个类型参数
- 泛型约束

	- 事先不知道数据类型，不能操作属性或方法
	- interface + extends

### 高级类型

- 交叉类型(&) 联合类型(|)

	- & 交叉类型是将多个类型合并为一个类型
	- |  能访问此联合类型的所有类型里共有的成员
	- keyof

		- keyof  产生联合类型
		- 表示获取类型所有的属性(key)

	-  in 遍历类型

- 类型保护

	- as typeof instanceof

- 类型别名 Type

	- 创建了一个新名字来引用那个类型

### 模块化

- 模块

	-  ES6 标准+ export = 和 import xx = require()
	- 模块里不要使用命名空间
	- 一般使用模块就够了

- 命名空间

	- module A =  namespace X
	- 相同命名空间会合并

### 声明文件

- .d.ts 
- 为 TS 提供用 JS 编写的 API 的类型信息
- @types 

	- node_modules/@types 
	- compilerOptions.typesRoot

		- 自定义@types目录

	- compilerOptions. types

		- 列出会应用@type的包

### 类

- 继承

	- 子类(派生类)
	- 父类(超类)
	- super

		- 调用父级的构造函数

- 修饰符

	- public\ private\ protected\ readonly

		- protected 派生类

- 存取器(getters/setters)
- 静态属性
- 抽象类

	- abstract

		- 内部定义抽象方法

	- 不会直接被实例化
	- 包含成员的实现细节

- 构造函数

	- 实例部分与静态部分

		- 实例部分与静态部分

- 把类当做接口使用

	- 类定义会创建类的实例类型

### 函数

- 可选参数
- 默认参数
- 剩余参数
- this

	- 回调函数里的this

		- 箭头函数解决
		- 类库作者强制this: void, 不让使用

- 重载

	- 提供多个函数类型定义来进行函数重载

### 考题

- 为什么要使用 TypeScript ? 优势？

	- 静态检查编码错误
	- 充当文档
	- 自动填充

- const 和 readonly 的区别？

	- const: 防止变量被修改 readonly防止变量属性被修改

- 枚举和常量枚举的区别？

	- enum const name
	- 编译完的值是常量(enum的数值)

- 接口(Interface)和类型别名(Type)区别

	- 接口创建了一个名字和接口类型, Type只是一个别名, 引用了一些类型
	- 类型别名不能被extends和implements

- any 类型的作用是什么？

	- 跳过编译检查

- any、never、unknown、null & undefined 和 void 有什么区别？

	- any: 跳过了类型检查
	- never: 永不存在的值, 抛出错误、函数死循环
	- unknown: 所有类型都可以分配给unknown, 只能被赋值给 any和unknown 
	- null & undefined 默认是所有类型的子类型,  strictNullChecks
	- void: null和undefined的联合

- interface 可以给 Function / Array / Class（Indexable）做声明吗?

	- 可以、把各自壳子里的类型书写

- TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？

	- 配置noImplicitThis: true, 必须声明类型
	- 箭头函数一样

- 使用 Union Types (联合类型)时有哪些注意事项？

	- 不要使用没有的属性或方法

- 如何联合枚举类型的 Key?

	- keyof

		- 联合所有的key

	- typeof

		- 找到值的类型

- ?.、??、!、!.、_、** 等符号的含义？

	- ?. 可选链
	- ?? 空值合并运算符

		- 一侧为 null \undefined 时，返回另一侧

	- ! 非空断言运算符

		- 排除 null 和 undefined
		- !. 断言排除

	- _ 数字分割符

		- 分隔符不会改变数值字面量的值

	- ** 求幂

- 简单介绍一下 TypeScript 模块的加载机制？

	- 绝对或者相对的路径查找
	- 一个外部模块声明（.d.ts）查找

		- node_modules/@types

- 如何使 TypeScript 项目引入并识别编译为 JavaScript 的 npm 库包？

	- 没有类型: 编写d.ts
	- 安装@types/包名

- TypeScript 中同名的 interface 或者同名的 interface 和 class 可以合并吗？

	- 同名的interface会自动合并，同名的interface和class会自动聚合。

- tsconfig.json 中有哪些配置项信息？

	- files
	- include & exclude 指定编译
	- compilerOptions 编译配置项

		- allowJs
		- paths: 模块导入别名

- declare，declare global是什么？

	- declare global 声明全局对象 如: window 增加新的属性

- 类中成员的 public、private、protected、readonly 修饰符的理解？

	- protected 派生类

- keyof 和 typeof 关键字的作用？

	- keyof : 联合类型所有的key
	- typeof: 这个值的类型

- 数组定义方式?

	- 字面量
	- 构造函数+泛型

- 简单聊聊你对 TypeScript 类型兼容性的理解?

	- 基于结构子类型

		- 相反的是基于名义类型(明确的声明和/或类型的名称)

	- 可靠性

		- 允许某些不可靠行为

	- 协变

		- 接受比其定义的类型更广泛的类型

			- 包含关系

	- 函数逆变

		- 函数参数接受比其定义的类型更广泛的类型

			-  本传一只狗, 传一只动物

		- 函数返回值接受比其定义的类型更狭窄的类型

			-  本返回一个狗, 可以返回小狗

		- 开启配置: strictFunctionTypes 

	- 函数参数双向协变(协变和逆变)

		- 函数参数接受比其定义的类型更广泛的类型

			- 逆变:  本传一只狗, 传一只动物

		- 函数参数接受比其定义的类型更狭窄的类型

			- 协变:  本传一只狗, 传一只小狗

	- 不变性

		- 都不安全 老老实实
