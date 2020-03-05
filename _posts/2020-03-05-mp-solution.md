---
layout: post
title: 小程序 + 多端的实现方案
tags: blog
category: js
keywords: 小程序,微信
---

小程序适配的两种方向 

- 静态编译转换
- 运行时兼容

## Rax


Rax 目前提供编译时的兼容方案 基础组件 <https://github.com/raxjs/rax-components#readme> 中可以看到将基础组件通过按各端的语法都写了一份. 再通过编译时根据运行环境,按需编程成对应端的代码. 

这种方案保持了渲染的效率, 最后运行的代码通过 jsx2mp-runtime 执行到微信小程序当中. 

理想情况下: 通过 rax-components 的组件封装再结合端 API 的封装, 能实现业务上保持统一写法, 同时也可以发挥响应端的优势. 

> 继续组件开发 + API adapter 投入开发量保障业务侧的统一. 这块是个体力活.

> <https://rax.js.org/docs/api/introduce>
> <https://zhuanlan.zhihu.com/p/108214173>

受限于 JSX 的灵活性在构建阶段需要关注的点较多, AST 语法解析再生成各端需要的代码. 也许需要限制些语法规范. 或者投入大精力在构建阶段的解析工作.

> 例如: taro 2.0 中就约定了很多 jsx 语法的 "最佳实践" 避开此类问题.

- demo 示例 <https://github.com/raxjs/go-rax>

rax 目前也正在研发 运行时兼容的方案, 即将发布. 生态基建方面待建设.

## Kbone

Kbone 则与 Rax 相反, 提供运行时的兼容方案. 通过伪造的 window document 闭包运行将 jsx vue 文件的运行结果转成虚拟 dom 树的方式, 再通过自定义组件的方式(合并节点组层), 最后渲染到小程序中. 本质上是一种 view = f(state) 的方式.

这种方式保持了 web 的开发习惯, 能兼容多种框架. 只需要有对应的 render 就可以做到兼容其他小程序. 但是也存在一定的上限, 也就是页面节点数越多, 则带来的计算虚拟节点的消耗也越来越大.

理论上通过 BOM/DOM 的模拟伪造, 可以达到运行时完全兼容. 之后主要精力则放在了设备 APIS 的差异化上.

同时由于闭包实现的机制 页面间的数据共享等方案需要特殊对待 <https://github.com/Tencent/kbone/issues/71> 中讨论的问题.

微信小程序团队出品, 平台也有一定的支持, miniprogram-element miniprogram-render 不会计算到小程序的包大小中.

> 同时也带来了额外问题, 如果有个性化修改, 同样也得不到内置的支持.
> 可能不会继续支持其他平台.

## Remax 

`react`  运行时兼容

提供完整的 react 支持, 无需调整开发习惯. 对跨端的适配由业务通过自行封装 remax/wechat remax/toutiao 基础组件的方式进行, 这部分工作开放给了开发者, 也提供了一定的控制权, 和调试的主动权.

默认不提供 web 的构建与组件, 需要的话业务自行封装, 以及相应的打包构建工具.

专注处理虚拟节点, 使用 template 循环渲染的方式, 目前支持最深的层级是 20 个嵌套.

## taro 2.0

`react` 编译时转义

taro 有自己实现的类 react 实现, 写法上与 react 无异. 编译时转义, 最大的好处就是能够保证各端上的运行效率不会太差, 只是牺牲部分框架兼容的性能, 静态模板的能力得以保留. 同样的由于 react jsx 语法的灵活性, 无法做到百分百的兼容转义, 在开发时就要注意, 按照官方给的最佳实践来书写.

taro 有众多的社区实践, 表明次方法是可以走得通的. 只要避开一些高级的写法.

转义同时带来另一个开发体验的不友好. 由于经过 CODE > AST > AST > CODE 的过程, 大量穷举 jsx 语法的转换, 丢失了 sourceMap. 

由于这种转换的无穷尽, taro 团队长期陷入对模板的转义维护. 包括对 DSL 的跟进程度. 生态自建等. 无法复用社区组件等.

## taro@next

回归到正视框架的运行原理, 本质上是对 DOM/BOM 的组合调用完成的. 在小程序中区分开了逻辑层与视图层, 这是目前大部分的小程序架构模式. (**也许未来会发生变化**) 但前端的运行机制没有改变, 浏览器没有改变. 要实现多端的开发, 回归到标准本身即可.

长远的发展看随着设备硬件 & 网络的提升, 运行时性能的影响将逐步下降.

taro@next 回归到了对运行时兼容的模式上来. 通过适配器将 reace/vue 的代码运行到小程序中.

## 选型对比

| - | 组件 | 社区生态 | 静态模板 | 运行时 | 语法 | 多端 | 
| --- | --- | --- | --- | --- | --- |  -- | 
| Rax | rax-ui/rax-components |  ☆☆  | Y | O(待发布) | import rax | h5,we,alipay,weex
| kbone | kbone-ui | | N | Y | 额外判断 | h5,we
| remax | remax/wechat | ☆ | N | Y | 无 | h5,we,alipay,toutiao | 
| taro@2 | @tarojs/components | ☆☆☆☆ | Y | N | import @tarojs/taro | all |
| taro@next | @tarojs/components | ☆☆☆ | N | Y | import @tarojs/taro | O |

## 总结

目前的多端开发主要就两种模式 **编译转换** **运行兼容** 两种方式的优缺点都非常明显;

静态编辑相对而言能提供更好的体验支持, 对开发者有一定的语法约束, 调试能力的要求. 

运行时兼容优点无需额外的学习成本(*目前都在往这个方向上不断靠拢*)也就是 BOM/DOM 的支持. 缺点也很明显, 由于小程序对 setData & 节点长度的限制. 运行时兼容首次渲染/长列表上的性能会受较大的影响. *页面更新基本上框架做到 diff update*

目前社区中基本都在 **运行时** 上做文章, 因为这对开发者来说能最小的迁移成本, 以及扩展成本. 只要开发对应端的 react-reconciler 即可. 对性能要求苛刻的, 基本都写原生了.

另一个观点就是设备的性能逐步提高, 优化业务逻辑的更新效率, 用户体验能逐步的提高, 也就更倾向于该方案了.

### 阅读资料

- [Taro Next 架构揭秘 | GMTC《小程序跨框架开发的探索与实践》万字无删减](https://juejin.im/post/5e0dd562f265da5d6a664b6d#heading-27)
- [Taro Next 发布预览版：同时支持 React / Vue / Nerv](https://juejin.im/post/5e4487b3e51d4527214ba6b1)
- Building a Custom React Renderer | Sophie Alpert <https://www.youtube.com/watch?v=CGpMlWVcHok>
- Remax 实现原理 <https://remaxjs.org/advanced-guide/implementation-notes>
- kbone 原理 <https://wechat-miniprogram.github.io/kbone/docs/guide/principle.html>
- Remax 跨平台开发 <https://remaxjs.org/advanced-guide/cross-platform>
