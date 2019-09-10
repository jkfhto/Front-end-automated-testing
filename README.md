# Front-end-automated-testing

## 为什么需要自动化测试

一个项目最终会经过快速迭代走向以维护为主的状态，在合理的时机以合理的方式引入自动化测试能有效减少人工维护成本。自动化测试的收益可以简单总结为：

```
自动化的收益 = 迭代次数 * 全手动执行成本 - 首次自动化成本 - 维护次数 * 维护成本
```

对于自动化测试来说，相对于发现未知的问题，```更倾向于避免可能的问题```。

### 为什么要测试

- 作为现有代码行为的描述。
- 提升项目的健壮性、可靠性。
- 减少项目迭代重构带来的风险。
- 促使开发者写可测试的代码。
- 依赖的组件如果有修改，受影响的组件能在测试中发现错误。
- 降低人力测试的成本、提高测试的效率

## 前端自动化测试框架 Jest

- Jest优点：
  - 速度快
  - API简单
  - 易配置
  - 隔离性好
  - 监控模式
  - IDE集成
  - Snapshot（快照）
  - 多项目并行
  - 覆盖率
  - Mock丰富

## 目录

- Jest 前端自动化测试框架基础入门
  - [使用 Jest 自动化测试样例](./note/01.md)
  - [Jest 的简单配置](./note/02.md)
  - [Jest 中的匹配器](./note/03.md)
  - [Jest 命令行工具的使用](./note/04.md)
  - [异步代码的测试方法](./note/05.md)
  - [Jest 中的钩子函数](./note/06.md)
  - [钩子函数的作用域](./note/07.md)
  - [Jest 中的 Mock](./note/08.md)
- Jest难点进阶
  - [snapshot 快照测试](./note/09.md)
  - [mock 深入学习](./note/10.md)
  - [mock timers](./note/11.md)
  - [ES6 中类的测试](./note/12.md)
  - [Jest 中对 DOM 节点操作的测试](./note/13.md)