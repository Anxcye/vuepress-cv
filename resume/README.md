<div>
  <div>
    <h1>姓名</h1>
    <h3>求职意向：后端开发实习生</h3>
  </div>
  <style>
    img {
        width: 0.9rem;
    }
  </style>
  
  <ul>
    <li><span><img src="./img/phone-outline.svg"> / <img src="./img/wechat.svg"></span> 在线版不能公开呢</li>
    <li><span><img src="./img/email-outline.svg"></span> <a href="mailto:axyyu@outlook.com" target="_blank">axyyu@outlook.com</a></li>
    <li><span><img src="./img/github-outline.svg"></span> <a href="https://github.com/Anxcye" target="_blank">github.com/Anxcye</a> (<img src="./img/star.svg"> 2.0k+)</li>
    <li><span><img src="./img/person-outline.svg"></span> <a href="https://anxcye.com" target="_blank">https://anxcye.com</a></li>
  </ul>
</div>

---

## 教育经历

**厦门大学** `985` 计算机科学与技术 本科 <span class="right">2022.09 - 2026.06</span>

## 技能描述

- **Java 核心技术**：掌握 Java 基础，反射、集合、并发编程（锁、线程池等）、JVM（内存模型、垃圾回收机制、类加载机制）
- **Spring 框架**：熟悉 Spring Boot、MyBatis-Plus、Spring Security 等框架，熟悉 IOC 和 AOP 的原理
- **数据库**：熟悉 MySQL 数据库，了解索引、事务、锁等机制
- **Redis**：熟悉 Redis 缓存，了解缓存的穿透、雪崩、击穿问题，了解分布式锁、缓存淘汰策略
- **Vue 前端**：熟悉 Vue 框架，并能够使用 Vue Router、Pinia 和 Tailwind CSS 等库，能够使用 TypeScript
- **Flutter**：熟悉 Flutter 开发，了解 Dart 语言，熟悉 Riverpod、InAppWebView、Dio 等库
- **Docker**：熟悉 Docker 容器，能够创建镜像、编写 Dockerfile、docker-compose 和配置网络
- **环境与工具**：熟练地在 Linux 环境下进行开发，熟练使用 Git 版本控制，了解 Nginx、SSL 证书的配置、GitHub Actions 的使用

## 项目经验

### 开源项目-安读 <span class="role"></span> <img width="16px" src="./img/star.svg"> 1.8k+ &nbsp;&nbsp; <a href="https://github.com/anxcye/anx-reader" target="_blank">github.com/anxcye/anx-reader</a> <span class="right">2024.03 - 至今</span>

`Flutter` `Dart` `SQLite` `Riverpod` `JavaScript` `InAppWebView` `Dio`

使用 Flutter 开发的一款跨平台的电子书阅读器，收获 2.0k+ star 和 100+ issue和数万次的下载量。实现了阅读界面的高度自定义、详尽的阅读数据统计、丰富的书签和笔记功能以及多端同步。

- 使用 Riverpod 作为状态管理，实现了全局状态的管理和共享，结合 shared_preferences 实现了数据的持久化
- 使用 SQLite 作为本地数据库，并能够在大版本更新时进行数据迁移
- 使用 InAppWebView 实现了 Flutter 和 JavaScript 的交互，编写 JavaScript 代码实现了阅读界面的高度自定义
- 使用 Dio 实现了网络请求，提供了多种翻译引擎的选择，并能够检查 GitHub 上的最新版本提示更新
- 使用多线程，在备份/恢复数据、转换书籍格式等耗时操作时，不会阻塞 UI 线程并减少了 90% 的时间
- 使用 GitHub Actions 在推送新版本时自动打包发布，实现了 Android 和 Windows 的跨平台编译、发布

---

### Ancy（个人网站）<span class="role">全栈开发</span> <a href="https://anxcye.com" target="_blank">anxcye.com</a>&nbsp; 开源地址：<a href="https://github.com/anxcye/ancy-blog" target="_blank">github.com/anxcye/ancy-blog</a> <span class="right">2024.06 - 至今</span>

`Spring Boot 3` `Mybatis-Plus` `MySQL` `Redis` `Spring Security` `Nginx` `Docker` `Vue 3` 

个人网站，实现了博客、项目展示、评论、时间线以及用户的注册、登录、权限管理等功能。

- 使用 AOP 和自定义注解实现了日志记录和时间线功能。借助自定义注解，将文章、项目、日记功能的内容提取出来，生成时间线
- 使用 Spring Security 和经典的 RBAC 模型实现了用户的新增、登录、权限管理等功能，并使用 JWT 实现了 token 的生成和验证
- 使用 Redis 缓存了高频内容，如文章的阅读次数，在访问量较大时，能够减轻数据库的压力
- 使用 Spring Scheduled 定时任务，将 Redis 中的数据定时持久化到 MySQL 中，保证数据的安全性
- 项目已支持阿里云 OSS，将图片等静态资源上传到 OSS，减轻服务器的压力
- 前端使用 Vue 3 + TypeScript，并借助 Vue Router 实现动态路由，Pinia 实现状态管理。选用了 Tailwind CSS 和 SCSS 作为样式预处理器
- 编写了 Dockerfile 和 docker-compose，使用了 Nginx 反向代理，并配置了 SSL 证书的自动更新。构建了前后端分离的项目，可以一键部署
- 使用 GitHub Actions 自动化打包，编写了 workflow，在推送后自动打包发布。目前项目已运行在 Azure 服务器上，并借助 Cloudflare 防范攻击

## 其他

- 本简历在线地址：[https://cv.anxcye.com](https://cv.anxcye.com)
