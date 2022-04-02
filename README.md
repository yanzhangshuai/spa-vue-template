vue3 + webpack + Typescript template

目前问题

require.context 匹配文件正则具有局限性

service 层未设计


命令
```
npm run dev                     开发环境

npm run build                   生产环境
npm run build:br                生产环境, 文件压缩.br格式
npm run build:gzip              生产环境, 文件压缩.gzip格式

npm run lint                    eslint、stylelint
npm run test                    单元测试

npm run report                  分析生产环境编译结果
npm run report:test             分析单元测试结果
npm run report:windi            分析 windicss 使用结果
```

项目结构
* **build**：项目编译层
* **config**：项目配置层
* **src**： 项目工作区层
  * **asset**： 静态文件模块
  * **component**：组件模块
  * **directive**：指令模块
  * **hook**： hooks模块
  * **page**：页面模块
  * **plugin**：插件模块
  * **router**：页面路由模块 
  * **service**：数据服务模块
  * **store**：数据缓存模块
  * **util**：工具模块
* **standard**：代码规则层
* **test**：单元测试层
* **type**：通用类型层