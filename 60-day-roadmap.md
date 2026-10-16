Day 1｜开发环境 + Git ✅

已完成：

Node.js
npm 基础
Git
GitHub
Cursor
PowerShell / Terminal
项目初始化
git status
git add
git diff
git diff --cached
commit
push

目标不是会背 Git 命令，而是从第一天开始按照真实开发流程保存代码。



Day 2｜JavaScript 基础 + 业务建模 ✅

已完成：

const / let
数据类型
Array
Object
Function
if / else
loop
null / undefined
边界条件
工单业务建模
Single Source of Truth

开始建立：

业务需求
↓
数据结构
↓
条件
↓
函数
↓
结果



Day 3｜JavaScript 数据处理核心 ✅

这一块我们实际学得比原计划更深入。

已经完成：

find
filter
map
forEach
some
every
reduce
includes
indexOf
findIndex
sort
slice
splice
destructuring
spread / rest
?.
??
string methods
Object methods
动态属性
in
Object.hasOwn
delete
shallow copy
reference
for...of
for...in
scope
truthy / falsy

目标已经达到：

看到一个工单数据处理需求，能够判断应该使用哪个数组/对象工具。



Day 4｜函数设计 + 异步 JavaScript

这里把我们准备学习的“函数职责”和原计划 Day 4 合并，而不是额外占一天。

先学：

函数职责
参数
返回值
计算与输出分离
拆分业务函数

然后进入：

同步 / 异步
Promise
async / await
try / catch
fetch

原计划 Day 4 的核心本身就是 Promise、async/await、try/catch 和 fetch。

实战：

获取工单
↓
等待 API
↓
处理数据
↓
异常处理
↓
显示结果



Day 5｜Module + JSON + HTTP + REST API

学习：

ES Module
import
export
JSON
JSON parse/stringify
HTTP
Request
Response
GET
POST
PUT
DELETE
REST API
HTTP Status 基础

这一安排保持原计划 Day 5 的主线。

最终要理解：

Frontend
   ↓ HTTP
Backend API
   ↓
JSON Response

Day 6｜TypeScript 基础

学习：

type
interface
union
optional
function type
array type
object type

重点不是背 TS 语法。

而是把：

const workOrder = {...}

升级成明确的：

interface WorkOrder {
    orderNumber: string;
    productName: string;
    planQuantity: number;
    completeQuantity: number;
}

Day 7｜TypeScript 实战

学习：

narrowing
generic 基础
utility types 基础
modules
API 类型
React 即将需要的 TS

实战：

把前面的 JavaScript 工单模块逐步改成 TypeScript。

不深入 TS 类型体操。



Day 8｜React 基础

学习：

Component
JSX
Props
State
Event
Component tree

开始把之前的：

workOrders[]

真正显示到页面。



Day 9｜React 状态与表单

学习：

useState
useEffect
List
Conditional Rendering
Form
Event
State Update

实战：

工单列表
搜索
筛选
新增
修改



Day 10｜React Router + 页面结构

学习：

React Router
Layout
Route
Nested Route
Params

建立：

/login
/dashboard
/products
/work-orders
/work-orders/:id



Day 11｜React + Backend API

学习：

Axios / fetch 的项目使用
Loading
Error
API Layer
Pagination
Query Params

形成：

React
 ↓
API Layer
 ↓
HTTP
 ↓
Backend



Day 12｜企业后台 UI

按照原计划进入：

Ant Design
Table
Form
Modal
Pagination
ECharts 基础

原计划最终前端技术组合就是 React + TypeScript + Ant Design + ECharts。

目标不是学会 Ant Design 所有组件。

而是：

会做企业后台管理系统。



Day 13｜AI Coding 工作流

正式训练：

需求
↓
自己分析
↓
让 AI 给方案
↓
自己确认
↓
AI Coding
↓
运行
↓
测试
↓
Review
↓
自己修改

核心原则：

AI 写代码 ≠ AI 替你做决定。

要开始训练判断 AI 代码是否符合业务要求。



Day 14｜第一阶段考试 + 开始求职

不看教程完成一个：

React + TypeScript CRUD 管理系统

至少包括：

查询
搜索
分页
新增
修改
删除
Loading
Error
API 调用

同时：

Day 14 开始投简历。

不等 Day 60。

这也是原计划明确设置的节点。



第二阶段｜Day 15～30

Java + Spring Boot

目标：

建立企业 Java 后端开发能力。

Day 15～20｜Java 核心

Day 15

Java Syntax
Class
Object
Method
Constructor

重点：

用已经掌握的 JS 概念快速映射 Java。

Day 16

OOP：

Encapsulation
Inheritance
Interface
Abstract
Polymorphism

重点不是背定义，而是：

为什么企业 Java 项目大量使用 interface / class。

Day 17

Java Collections：

String
Array
List
Set
Map

Day 18

重点：

ArrayList
HashMap
Collections
equals
hashCode

Day 19

现代 Java：

Lambda
Stream
Optional

重点和 Day 3 JS 联系：

JS map/filter
      ↕
Java Stream map/filter

Day 20

异常：

Exception
try/catch/finally
自定义 Exception
checked / unchecked 基础



Day 21～30｜Spring Boot

Day 21｜Maven

学习：

pom.xml
dependency
package
lifecycle
test

建立标准 Java 项目结构。

Day 22｜Spring Boot

Spring Initializr
Spring Boot
Controller
@RestController
REST API

第一次实现：

GET /work-orders

Day 23｜企业后端分层

理解：

Controller
    ↓
Service
    ↓
Repository / Mapper

重点：

面试时能够解释为什么分层。

原计划也特别把这个问题标记为以后面试很可能会问。

Day 24｜Dependency Injection

学习：

DI
Bean
@Service
@RestController
constructor injection
Spring 容器基本概念

不深入 Spring 源码。

Day 25｜企业 API 数据设计

学习：

DTO
Entity
VO 基础
参数校验
Validation
Exception Handler

Day 26｜CRUD API

实现：

GET
POST
PUT
DELETE

模块：

/users
/products
/work-orders

Day 27｜JWT

理解：

Login
 ↓
JWT
 ↓
Frontend 保存 Token
 ↓
Request 携带 Token
 ↓
Backend 验证

Day 28｜Spring Security

只学求职项目需要的：

Authentication
Authorization
JWT
Password Hash
Filter
Role

不深入 Security 源码。

Day 29｜AI Coding + Spring Boot

让 AI 辅助生成一个模块：

Controller
Service
Mapper
DTO
Entity
Exception
Test

但是：

每一层自己 Review。

Day 30｜第二阶段考试

不用教程写：

Spring Boot CRUD API

要求：

GET
POST
PUT
DELETE
JWT
Validation
Global Exception Handler

这是原计划第二阶段的验收标准。



第三阶段｜Day 31～45

MySQL + MyBatis + 企业全栈项目

目标：

从“会写 Demo”进入“我有一个能拿去面试讲的企业项目”。

Day 31｜MyBatis

Mapper
XML
SQL
ResultMap

Day 32｜MyBatis CRUD

CRUD
参数
Dynamic SQL
条件查询

Day 33｜MySQL 基础

Database
Table
Primary Key
Foreign Key
CRUD
数据类型

Day 34｜SQL 核心

JOIN
LEFT JOIN
INNER JOIN
GROUP BY
HAVING

Day 35｜SQL 求职常用能力

Subquery
CASE
ORDER BY
LIMIT
Pagination

Day 36｜数据库性能基础

Index
Composite Index
Explain

目标：

能解释为什么某些查询慢。

不深入 DBA 内容。

Day 37｜Transaction

Transaction
ACID
Isolation 基础
Rollback
Spring Transaction 基础



Day 38 开始正式毕业项目

项目固定：

AI Manufacturing Management System

AI 企业生产管理系统

这延续原计划的“企业生产管理系统”方向。



Day 38｜项目设计

设计：

需求
数据库
API
页面
权限
模块

不能一上来让 AI 全部生成。

先自己设计。

Day 39｜数据库设计

核心表：

users
roles
permissions

products

production_orders
production_records

exceptions

建立 ER 关系。

Day 40｜用户管理

完成：

User CRUD

前后端打通。

Day 41｜产品管理

完成：

Product CRUD

Day 42｜生产订单

完成核心业务：

Production Order CRUD
状态
计划数量
完成数量
进度

这里会大量重新使用 Day 2～3 的业务思想。

Day 43｜生产记录

实现：

工单
 ↓
Production Record
 ↓
完成数量变化
 ↓
工单进度

Day 44｜异常管理

实现：

Exception Record
异常类型
状态
处理记录

Day 45｜第一次完整全栈跑通

达到：

React
 ↓
TypeScript
 ↓
Axios
 ↓
Spring Boot
 ↓
Service
 ↓
MyBatis
 ↓
MySQL

全部跑通。

这就是原计划 Day 45 的关键里程碑。



第四阶段｜Day 46～60

项目强化 + AI Coding + 求职冲刺

这个阶段身份发生变化：

前面是“学习者为主”。

现在：

求职者 + 项目开发者。

原计划也明确把 Day 46～60 定义为从学习者转向“求职者 + AI Coding 开发者”的阶段。

Day 46｜登录 + JWT

完整实现：

Login
JWT
Refresh / Expire 基础
Frontend Auth
Backend Auth

Day 47｜RBAC 权限

角色：

管理员
生产主管
普通员工

理解：

User
 ↓
Role
 ↓
Permission

Day 48｜Dashboard

ECharts：

生产量
完成率
工单数量
异常数量
工单状态分布

让项目从 CRUD 升级成真正的企业系统。

Day 49｜企业查询能力

完善：

Pagination
Search
Filter
Sort
Dynamic Query

Day 50｜统一异常

完善：

Backend Exception
 ↓
统一 Response
 ↓
Frontend Error
 ↓
用户提示

Day 51｜Logging + Debug

学习：

项目日志
Debug
API Debug
SQL Debug
AI 辅助定位 Bug

重点：

不只是“会写”，还要“会查问题”。



Day 52～58｜AI Coding 工程能力

这里保留原计划很有价值的一部分。

Day 52｜AI Coding Rules

建立项目级 AI 规则。

例如：

frontend rules
backend rules
database rules
testing rules

目标：

AI 开始按照你的项目标准写代码。

Day 53｜项目上下文

学习如何让 Coding Agent 理解：

Architecture
Tech Stack
Coding Standard
Database Standard
API Standard
Git Workflow
Test Command

Day 54｜Skills / 可重复工作流

把重复开发流程标准化，例如：

create-react-page
create-spring-api
create-mybatis-mapper
create-sql
code-review
write-test

目标：

从“每次告诉 AI 怎么写”升级成“建立 AI 开发流程”。

Day 55｜MCP 基础

理解：

LLM
 ↓
Agent
 ↓
Tool
 ↓
External System

知道 MCP 解决什么问题。

不要求自己从零实现复杂 MCP Server。

Day 56｜MCP 实战

尝试让 Coding Agent 使用外部能力：

GitHub
Database
Browser
Documentation

重点是“会使用”。

Day 57｜Coding Agent 工作流

训练：

需求
 ↓
Plan
 ↓
AI 实现
 ↓
Test
 ↓
Review
 ↓
Fix
 ↓
Git Commit

而不是：

一句 Prompt
↓
Accept All

Day 58｜多模型 / 多 Agent Review

让不同 Coding Agent 分别：

理解代码
实现功能
写测试
Debug
Review

最后：

由你做最终决定。



Day 59｜项目终极 Review + 面试准备

完整 Review：

前端

React
TypeScript
Component
State
API
Error
Performance 基础

后端

Java
Spring Boot
Controller
Service
DI
Exception
JWT
Security

数据库

MyBatis
SQL
Index
Transaction

项目

必须能解释：

为什么这样设计数据库？

为什么 Controller / Service 分层？

JWT 怎么工作？

权限怎么设计？

工单进度怎么算？

如何保证数据一致性？

索引为什么这样建？

遇到异常怎么处理？

AI 在项目中帮了你什么？

AI 写错代码时你怎么发现？

同时完善：

简历
GitHub README
项目截图
项目架构图
项目介绍
面试项目话术



Day 60｜求职模拟 + 最终验收

这一天：

不再学习新技术。

最终项目必须能够运行：

React
+
TypeScript
+
Ant Design
+
ECharts

        ↓

Spring Boot
+
JWT / Security
+
Validation
+
Exception Handler

        ↓

MyBatis
+
MySQL

        ↓

AI Coding Workflow

这也对应原计划 Day 60 要求完整技术栈全部跑起来的验收方向。

然后做：

自我介绍
项目介绍
Java 面试
Spring 面试
SQL 面试
React 面试
项目追问
AI Coding 追问
模拟技术面试



最终的 60 天能力地图

整个计划最终不是：

学 JS
→ 学 React
→ 学 Java
→ 学 Spring
→ 学 SQL

而是：

Day 1～14
JS + TS + React
        ↓
能做前端 CRUD
        ↓
开始投递

Day 15～30
Java + Spring Boot
        ↓
能独立写后端 CRUD API
        ↓
继续投递 + 面试

Day 31～45
MyBatis + MySQL
        ↓
完整企业生产管理系统
        ↓
有真正项目可以讲

Day 46～60
JWT + RBAC + Dashboard
+ AI Coding
+ 项目 Review
+ 面试
        ↓
正式冲求职

一个很重要的执行规则

以后我不会因为计划写：

Day 4 Promise

就意味着你当天必须不管懂没懂地结束 Promise。

也不会因为：

“函数还能继续深入”

就在函数上讲三四天。

我们采用：

主路线固定，日程允许小范围浮动。

例如：

Day 4 内容用了 1.5 天

没关系。

后面某个你已经掌握得比较快的内容：

0.5 天完成

把时间追回来。

真正控制的是四个里程碑：

Day 14 左右：React + TS CRUD + 开始投递。

Day 30 左右：Spring Boot CRUD API。

Day 45 左右：React + Spring Boot + MyBatis + MySQL 全栈跑通。

Day 60：完整企业项目 + AI Coding 能力 + 项目讲解 + 面试准备。

这四个节点，比机械地要求“今天必须学完第几个 API”重要得多。

以后我们就以这一版作为 60 天学习的主路线。当前 Day 1～3 已完成，下一步 Day 4 从函数职责做一个短补充，然后进入 Promise → async/await → try/catch → fetch。

最后可以再多几个实际项目。

可以，而且我建议不要把“多个项目”理解成最后 5 天突然再做 3 个大项目。那样很容易变成 AI 批量生成 CRUD，你自己反而讲不清。

更适合 60 天冲求职的是：整个 60 天逐步积累 4 个项目，1 个主项目 + 3 个不同侧重点的小/中型项目。

把项目线加入路线

时间
Day 9～14
Day 22～30
Day 38～60
Day 55～60 穿插

其中项目 3 是简历上的核心项目，投入最多；其他项目用来证明你不是“只会照着一个项目写”。

项目 1：React 企业管理后台

规模控制在小型。

React
TypeScript
Ant Design
Axios
React Router

功能做到查询、搜索、分页、新增、修改、删除、表单验证、Loading/Error。

这个项目主要回答面试官：

“你的 React / TypeScript 到什么程度？”



项目 2：Spring Boot 订单管理 API

不要重复项目 1 的技术重点，而是专门证明 Java 后端。

Java
Spring Boot
REST API
JWT
Validation
Global Exception
JUnit 基础

业务可以做：

Customer
Product
Order
OrderItem

这样还能练一对多关系。

主要回答：

“你能不能独立写一个规范的 Java 后端？”



项目 3：AI 企业生产管理系统 ⭐

这是毕业主项目，也是简历重点项目。

原计划本来就把企业生产管理系统作为正式项目方向。

技术栈：

React
TypeScript
Ant Design
ECharts

Spring Boot
Spring Security
JWT
RBAC

MyBatis
MySQL

AI

业务模块：

用户管理
角色权限
产品管理
生产工单
生产记录
异常管理
生产 Dashboard
条件查询
统计分析

最终 README、架构图、数据库设计、接口说明、项目截图、面试讲解全部围绕它准备。



项目 4：AI Manufacturing Copilot

这个项目可以直接和主项目的数据结合，但在 GitHub 上把 AI 能力作为一个清晰模块展示。

例如用户输入：

WO-001 为什么可能延期？

系统不是单纯把问题扔给 LLM，而是：

用户问题
   ↓
AI 判断需要什么信息
   ↓
调用 getWorkOrder("WO-001")
   ↓
调用 getProductionRecords("WO-001")
   ↓
获得真实业务数据
   ↓
AI 分析
   ↓
延期风险 + 原因 + 建议

再逐步增加：

“找出目前风险最高的工单”

“WO-003 最近发生了什么？”

“总结今天生产异常”

“查询电机产品相关工单”

“根据企业生产文档解释这个异常应该怎么处理”

这样 AI 就不是简历上的一句：

“熟悉 ChatGPT / Cursor。”

而是你真的能讲：

我把 LLM 接进了企业业务系统，并让模型结合数据库业务数据完成分析。

这会比单独做一个普通聊天机器人更有项目价值。



这样到 Day 60，你的 GitHub 最终不是只有一个仓库孤零零地写着 CRUD，而是形成一个小型作品集：

01 react-admin
   React + TypeScript

02 order-api
   Java + Spring Boot

03 manufacturing-system ⭐
   React + Spring Boot + MyBatis + MySQL

04 manufacturing-ai-copilot
   AI + Business Data

但有一个执行原则需要固定：项目数量服从项目质量。

如果到 Day 50 主项目还有明显问题，我们不会为了凑“四个项目”去赶第四个。求职时，1 个你能深入讲 20 分钟的完整项目 + 2 个清楚的小项目，通常比 6 个 AI 生成、自己讲不清的仓库更有意义。

所以之后这份 60 天路线可以正式增加一条“项目线”：不是 Day 60 才开始做项目，而是 Day 14、Day 30、Day 45、Day 60 每个阶段都有作品产出，最终形成求职作品集。
