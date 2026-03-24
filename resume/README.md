<div>
  <div>
    <h1>Anxcye</h1>
    <h3>求职意向：后端开发 / AI 协同开发</h3>
  </div>
  <style>
    img {
        width: 0.9rem;  
    }
  </style>
  
  <ul>
    <li><span><img src="./img/phone-outline.svg"> / <img src="./img/wechat.svg"></span> 在线版不能公开呢</li>
    <li><span><img src="./img/email-outline.svg"></span> <a href="mailto:anxcye@outlook.com" target="_blank">anxcye@outlook.com</a></li>
    <li><span><img src="./img/github-outline.svg"></span> <a href="https://github.com/Anxcye" target="_blank">github.com/Anxcye</a> (<img src="./img/star.svg"> 8k+)</li>
    <li><span><img src="./img/person-outline.svg"></span> <a href="https://anxcye.com" target="_blank">https://anxcye.com</a></li>
  </ul>
</div>

## 教育经历

**厦门大学** `985` 计算机科学与技术 本科 <span class="right">2022.09 - 2026.06</span>

---

具备后端、前端、移动端和独立产品落地经验，长期维护高 Star 开源项目，能够从需求分析、架构设计、编码实现到部署运维独立推进。持续将 AI 引入开发流程，熟悉使用 AI 辅助需求拆解、接口设计、代码生成、重构、测试补全和文档沉淀，能够在保证质量的前提下显著提升迭代效率。

## 技能描述

- **Java / Go 后端开发**：熟悉 Java 并发、集合、反射、JVM 内存模型和垃圾回收机制，能够使用 Go 完成 API 服务、配置管理、中间件、数据访问和工程化落地
- **后端框架与架构**：熟悉 Spring Boot、Spring Security、MyBatis-Plus，熟悉 Gin 等 Go Web 开发方式，理解 IOC、AOP、鉴权、中间件分层和模块化设计
- **数据存储**：熟悉 MySQL、PostgreSQL、Redis，了解索引、事务、锁、缓存穿透/击穿/雪崩、缓存持久化等问题
- **全栈开发**：熟悉 Vue 3、TypeScript、Flutter、Dart，能够独立完成后台、Web 前端、跨平台客户端的联调与交付
- **工程化与运维**：熟悉 Linux、Git、Docker、Nginx、GitHub Actions，具备容器化部署、自动化发布、HTTPS 与反向代理配置经验
- **AI 应用开发**：具备大模型应用落地经验，了解 RAG、模型微调、Function Calling、MCP、Skill/工作流封装等常见能力与工程用法，能够完成知识库问答、工具调用、流程编排和 AI 功能接入
- **AI 提效开发**：熟悉 Codex、Claude Code 等 AI Coding 工具，能够将 AI 用于需求拆解、方案比较、接口定义、代码生成、重构补全、测试编写和文档整理，提升原型开发和功能迭代效率

## 项目经验

### 开源项目-Anx Reader <span class="role"></span> <img width="16px" src="./img/star.svg"> 8k+ &nbsp;&nbsp; <a href="https://github.com/anxcye/anx-reader" target="_blank">github.com/anxcye/anx-reader</a> <span class="right">2024.03 - 至今</span>

`Flutter` `Dart` `SQLite` `Riverpod` `JavaScript` `InAppWebView` `Dio` `HarmonyOS`

Flutter 开发的集成 AI 的跨平台电子书阅读器，收获 8k+ star 和数十万次下载，处理 800+ issue，并已上架 App Store。支持 Android、iOS、macOS、Windows 及 HarmonyOS，提供高度自定义阅读界面、阅读数据统计、书签笔记和多端同步能力。

- 集成 OpenAI / Gemini / Claude / DeepSeek 等多种模型能力，落地翻译、总结、问答等智能阅读场景，提升产品差异化
- 负责从功能设计、编码实现、上架发布到 issue 处理的完整闭环，累计处理 800+ issue，持续迭代用户反馈
- 使用 Riverpod 管理全局状态，结合 shared_preferences 实现数据持久化，降低复杂页面状态同步成本
- 使用 SQLite 作为本地数据库并支持迁移，保证版本升级过程中的数据兼容性
- 使用 InAppWebView 实现 Flutter 与 JavaScript 交互，完成阅读器渲染和高度自定义能力
- 使用 Dio 支持 WebDAV 等同步能力，打通多端数据同步链路
- 对备份恢复、格式转换等耗时任务进行多线程处理，避免阻塞 UI，相关场景耗时降低约 90%
- 支持 HarmonyOS 平台适配，扩展了应用的多端覆盖范围
- 使用 GitHub Actions 完成 Android、Windows、iOS、macOS 等平台的自动化构建与发布，减少重复发布成本

---

### Ancy Blog <span class="role">全栈开发</span> <a href="https://anxcye.com" target="_blank">anxcye.com</a>&nbsp; 开源地址：<a href="https://github.com/anxcye/ancy-blog" target="_blank">github.com/anxcye/ancy-blog</a> <span class="right">2024.06 - 至今</span>

`Go` `Gin` `PostgreSQL` `Redis` `Nuxt 4` `Vue 3` `React` `TypeScript` `TipTap` `Docker Compose` `Caddy`

个人博客平台重构项目，负责后端 API、公开站点、管理后台、部署链路和 AI/数据分析能力的完整实现。

- 项目早期基于 Spring Boot 3、MyBatis-Plus、MySQL、Redis、Spring Security 和 Vue 3 完成了较完整的博客系统实现，后基于实际迭代需求完成面向 Go + PostgreSQL + Nuxt 4 + React 的系统性重构
- 主导将博客系统重构为 Go + PostgreSQL + Nuxt 4 + React 的前后端分离架构，提升系统可维护性和后续扩展能力
- 后端基于 Gin 实现内容、评论、友链、站点设置、翻译任务、统计分析等模块，并使用 `golang-migrate` 管理数据库迁移
- 集成 TipTap 富文本编辑器，支持 JSON 内容存储、自定义嵌入块、图片上传和前台渲染
- 实现基于 OpenAI-compatible 接口的 AI 能力，包括文章摘要、slug 生成、翻译任务执行与内容回写
- 构建访客埋点与分析链路，支持页面访问事件采集、后台统计查询，并结合 ip2region 实现离线 IP 地理信息解析
- 前端采用 Nuxt 4 + Vue 3 构建公开站点，React + TypeScript 构建管理后台，支持文章/说说管理、分类标签 CRUD、评论审核、站点设置、翻译中心和数据分析页面
- 使用 Docker Compose + Caddy + GHCR + Cloudflare 搭建单机生产部署方案，支持镜像发布、数据库迁移、备份和版本升级
## 其他
- 持续关注 AI Coding、Agent、RAG 等方向，习惯将 AI 融入编码、测试、文档和调试流程，提升研发效率
- 长期维护开源项目，具备较强的自驱力、自学能力和用户反馈闭环意识
- 本简历在线地址：<a href="https://cv.anxcye.com" target="_blank">cv.anxcye.com</a>
