## 虚拟DOM

### 对虚拟DOM的理解?

- 作用

	- 维护视图和状态的关系
	- DOM渲染的优化,保证性能下限
	- js跨平台

- 原理

	- JavaScript 直接操作 DOM 的计算成本很高, 所以使用js对象来模拟dom操作, 批量处理调用, 并一次性更新差异的DOM
	- 改造了snabbdom

- diff对比算法原理

	- 只同级比较节点

		- DOM操作很少跨级别操作节点
		- 深度优先算法
		-  时间复杂度:O(n)

	- diff原则

		- 原地复用 > 移动后复用  > 暴力替换

	- 首尾指针法

		- 为什么要用?

			- 时间复杂度为O(1)

		- 指针移动

			- 四个指针朝中间靠拢
			- oldS > oldE

				- oldCh遍历完成
				- 先完成说明新节点多

			- newS > newE

				- newCh遍历完成
				- 先完成说明新节点少

		- oldS 和 newS 使用sameVnode比较

			- 相同节点

				- 调用patchVnode
				- 更新索引

		- oldE 和 newE 使用sameVnode比较

			- 相同节点

				- 调用patchVnode
				- 更新索引

		- oldS 和 newE 使用sameVnode比较

			- 相同节点

				- 调用patchVnode
				- oldVnode对应的DOM元素移动到newE对应的位置
				- 更新索引

		- oldE 和 newS 使用sameVnode比较

			- 相同节点

				- 调用patchVnode
				- oldVnode对应的DOM元素移动到newS对应的位置
				- 更新索引

		- 上四种情况都不满足

			- 遍历 oldCh, 创建一个 map{ key:index}
			- 找idxInOld(newStartVnode在oldCh中的索引)

				- map中的key和newStartVnode的key相同时
				- 遍历oldCh, 使用sameVnode对比后相同时

			- idxInOld

				- 创建元素

					- idxInOld定义了并且sameVnode对比不相等时
					- idxInOld没有定义时

				- idxInOld定义了并且sameVnode对比相等时

					- 调用patchVnode
					- 把这个节点插入到最前面的位置

		- 收尾

			- 老节点先遍历完 oldStartIdx > oldEndIdx

				- 把剩余新节点批量插入到老节点的右边

			- 新节点先遍历完  newStartIdx > newEndIdx

				- 把剩余老节点批量删除

### 虚拟DOM的解析过程

- vue模版通过编译器转化为render函数
- 调用render函数, 生成虚拟dom

	- createElement()函数 创建Vnode

		- key
		- children 
		- elm

			- 真实dom

		- text

			- 和children互斥

	- patch() 对比新旧两个Vnode

		- isSameVnode

			- replace
			- patchVnode

				- 都有子节点

					- 对比子节点, 更新差异(updateChildren)

						- diff对比算法

				- oldVnode有子节点, newVnode没有

					- 移除所有oldVnode

				- oldVnode没子节点, newVnode有

					- 添加所有子节点

				- 都有文本节点并且不相等

					- 设置为newVnode的文本节点

	- 把变化的Vnode更新到真实的DOM树

		- createEle()
		- removeVnodes()

### Vue3 diff对比算法原理 patchKeyedChildren部分

- 同是头节点

	- patch() 新旧两个Vnode
	- 头部索引(i)后移，继续比较剩余节点

- 同是尾节点

	- patch() 新旧两个Vnode
	- 尾部索引(e1、e2)前移，继续比较剩余节点

- 是否需要新增节点

	- 老节点的开始节点大于结束节点(i > e1)

		- 新节点没比较完 (i <= e2)

			- 调用patch() 新增剩余的DOM节点

- 是否需要移除节点

	- 新节点的开始节点大于结束节点(i > e2)

		- 老节点没比较完 (i <= e1)

			- 调用unmount() 移除剩余的DOM节点

- 剩余节点中寻找可复用节点

	- 创建一个newChildren key: index的map (keyToNewIndexMap)
	- 创建一个新节点的数组, 里面存储着老节点对应的索引(newIndexToOldIndexMap)
	- 遍历老节点数组, 寻找可复用节点并填充newIndexToOldIndexMap数组
	- 移动可复用节点到正确的位置
题 

		- 计算出一个最长递增子序列。
		- newIndexToOldIndexMap[i] === 0

			- 没有可复用的节点, patch()新增dom

		- 不是最长递增子序列的元素

			- 把元素移动到正确的位置

		- 是最长递增子序列的元素

			- 元素保持不动, 让索引前移

### Vue3 deff算法的优化

- 事件缓存

	- 首次编译中, 缓存函数缓存绑定的方法, 后面可以直接从缓存中调用事件

- 静态标记

	- 在Diff中，跳过一些静态节点对比

- 静态提升

	- 不参与更新的元素保存起来，只创建一次

- patchKeyedChildren

	- 做了一个基于最长递增子序列进行移动/添加/删除

### 虚拟DOM真的比真实DOM性能好吗

- 首次渲染大量DOM时，会多了一层虚拟DOM的计算的时间
- 在DOM操作不频繁、功能简单的项目中, 不一定有很优的性能

### Vue中的key的作用

- diff算法中, 用来vnode是否是相同节点
- 具体作用

	- v-for更新渲染列表时, 在diff算法比较时, 会优先原地复用dom, 只改变更新的dom
	- v-if切换元素时, 如果切换前后含有相同类型的元素, 这个元素会被复用, 这时可以用来标识唯一元素

*XMind: ZEN - Trial Version*