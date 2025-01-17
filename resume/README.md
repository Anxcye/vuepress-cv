<div>
  <div>
  <h1>姓 名</h1>
  <h3>求职意向：后端开发实习生</h3>
  </div>

  <style>
    img {
        width: 0.9rem;
    }
  </style>
  
  <ul>
    <li><span><img src="./img/phone-outline.svg"> / <img src="./img/wechat.svg"></span>在线版不能公开呢</li>
    <li><span><img src="./img/email-outline.svg"></span><a href="mailto:axyyu@outlook.com" target="_blank">axyyu@outlook.com</a></li>
    <li><span><img src="./img/github-outline.svg"></span><a href="https://github.com/Anxcye"target="_blank">github.com/Anxcye</a> (<img src="./img/star.svg"> 1.8k+)</li>
    <li><span><img src="./img/person-outline.svg"></span><a href="https://anxcye.com" target="_blank">https://anxcye.com</a></li>
  </ul>
</div>

---

## 教育经历
**厦门大学** `985` 计算机科学与技术  本科  <span class="right">2022.09 - 2026.06</span>
## 技能描述
- **Java基础** 掌握Java基础，包括并发编程、反射、集合，JVM
- **Spring框架** 熟悉SpringBoot、mybatis-plus、Spring Security等框架，熟悉IOC和AOP的原理
- **数据库** 熟悉MySQL数据库，了解索引、事务、锁等机制
- **redis** 熟悉Redis缓存，了解缓存穿透、缓存雪崩、缓存击穿
- **vue前端** 熟悉Vue框架并能够使用vue-router、pinia和tailwindcss等库能够使用typescript
- **Flutter** 熟悉Flutter开发，了解Dart语言，熟悉Riverpod、Inappwebview、dio等库
- **Docker** 熟悉Docker容器，能够创建镜像、编写Dockerfile、docker-compose和配置网络
- **环境与工具** 熟练地在linux环境下进行开发，熟练使用Git版本控制，了解Nginx、SSL证书的配置、Github Actions的使用


## 项目经验
### 开源项目-安读 <span class="role"></span> <img width="16px" src="./img/star.svg"> 1.8k+ &nbsp;&nbsp; <a href="https://github.com/anxcye/anx-reader" target="_blank">github.com/anxcye/anx-reader</a>   <span class="right">2024.03 - 至今</span>

`flutter` `dart` `sqlite` `riverpod` `javascript` `inappwebview` `dio`

使用Flutter开发的一款跨平台的电子书阅读器，收获1.8k+ star和160+ fork/issue。实现了阅读界面的高度自定义、详尽的阅读数据统计、丰富的书签和笔记功能以及多端同步。

- 使用Riverpod作为状态管理，实现了全局状态的管理和共享，结合shared_preferences实现了数据的持久化。
- 使用SQLite作为本地数据库，并能够在大版本更新时进行数据迁移。
- 使用InAppWebView实现了flutter和javascript的交互，编写javascript代码实现了阅读界面的高度自定义。
- 使用Dio实现了网络请求，提供了多种翻译引擎的选择，并能够检查Github上的最新版本提示更新。
- 使用多线程，在备份/恢复数据、转换书籍格式等耗时操作时，不会阻塞UI线程并能够加快速度。

- 使用Github Actions在推送新版本时自动打包发布。实现了Android和Windows的跨平台编译、发布。

---

### Ancy (个人网站)<span class="role">全栈开发</span> <a href="https://anxcye.com" target="_blank">anxcye.com</a>&nbsp; 开源地址：<a href="https://github.com/anxcye/ancy-blog" target="_blank">github.com/anxcye/ancy-blog</a> <span class="right">2024.06 - 至今</span>

`springboot3` `redis` `spring security` `mysql` `nginx` `docker`  `vue3`

个人网站，实现了博客、项目展示、评论、时间线以及用户的注册、登录、权限管理等功能。

- 使用AOP和自定义注解实现了日志记录和时间线功能。借助自定义注解，将文章、项目、日记功能的内容提取出来，生成时间线。
- 使用Spring Security和经典的RBAC模型实现了用户的新增、登录、权限管理等功能。并使用JWT实现了token的生成和验证。
- 使用Redis缓存了高频内容，如文章的阅读次数，在访问量较大时，能够减轻数据库的压力。
- 使用 spring scheduled 定时任务，将redis中的数据定时持久化到mysql中，保证数据的安全性。
- 项目已支持阿里云OSS，将图片等静态资源上传到OSS，减轻服务器的压力。
- 前端使用Vue3+typescript，并借助vue-router实现动态路由，pinia实现状态管理。选用了tailwindcss和scss作为样式预处理器。
- 编写了Dockerfile和docker-compose，使用了Nginx反向代理，并配置了SSL证书，自动更新。构建了前后端分离的项目，可以一键部署。
- 使用Github Actions自动化打包，编写了workflow，在推送后自动打包发布。目前项目已运行在Azure服务器上，并借助Cloudflare防范攻击。

## 其他

- 本件在线地址为：[https://cv.anxcye.com](https://cv.anxcye.com)

