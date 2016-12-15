## 要求

 
学习Material-UI之前，需要先去了解[React](http://facebook.github.io/react/),Material-UI是React的前端组件，所以React是开始Material-UI开发的先决条件。

如果你已经熟悉单页面应用(SPAs)和Node,你可以直接跳过这一章，进入下一章[安装](#/get-started/installation)。

下面我们简单介绍一下是SPAs和Node。对于web开发经验不是很丰富或者开发经验只局限于HTML、CSS、JS等"传统"多页面网站的开发者是很有必要的。


### 单页面应用

之前很长一段时间，网站都是通过HTM、CSS组成的静态页面辅于javascript进行简单的用户交互和渲染。对于大多数的用户交互，特别是数据的处理，完整过程是从客户端到服务端，然后服务器反馈客户端数据，这种方式一般是"阻塞式"的，需要等一方完成数据传输，另一方才能做下一步的动作，用户体验特别差。

后面随着Ajax异步处理的出现，客户端在发送数据的同时，用户可以做其它事情而不受影响。然而，大多数用户交互仍然需要服务器的响应，而网站依然没有桌面程序响应那么快和流畅，SPAs就是为解决这个问题而生，它可以把网站像桌面程序的速度一样流畅，提升用户的体验度。

SPAs是只包含一个页面的网站，也就是说整个网站依靠单一的文件(通常是一个Javascript文件)，数据仅传输一次，从服务器到客户端。处理逻辑都在那个单一的文件中，这样我们才能体验到一个流畅的、快速响应的网站。这种web框架体系，近十年来取得很大的成果，很多流行的Javascript框架使用了这是思想。

- [Angular](https://angularjs.org)
- [Ember](http://emberjs.com/)
- [Backbone](http://backbonejs.org)
- [React](http://facebook.github.io/react/)

所有的代码包含在一个页面中，这对于项目的架构是一个大的挑战。幸运的是，我们可以使用工具把我们的代码分解成小的模块组织在一起（类似于面向对象编程里面的类和接口），这就Node的用武之地。

### Node

[Node](https://nodejs.org) 的核心是一个通过`C`实现的，使我们可以通过`shell`(终端，而不是浏览器)的方式运行Javascript。为了实现这个，[Node](https://nodejs.org) 采用了Chrome V8 Javascript引擎。因此，`Node`本质上是一个运行环境。

`Node`创建之初，主要是为了在web服务端使用Javascript，这个颠覆了`Javascript`仅用于客户端的传统。然而，随着时间的推移，web开发者认识到Node对模块化和依赖管理都很方便，并且出现了一大批好的项目：
- [Grunt](http://gruntjs.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org)
- [Webpack](http://webpack.github.io)


自从`Node`流行后，独立的开发者和组织通过写运行在Node上的scripts来做几乎所有web应用相关的事情。当然，这个社区都能受益于这些"定制Node scripts"。任何人都能上传他的javascript到包管理库中，然后其他的开发者可以在自己的项目中使用它们。

[Node包管理器](https://www.npmjs.com/), "npm"是其中最著名的一个，
npm 是一个命令行工具，可以用来将外部 JavaScript 合并到自己的项目。
比如，我们可以通过npm管理Material-UI，也就是说只要我们在项目目录简单的在运行`npm install material-ui`，就能在我们自己的项目中导入`Material-UI`，任何使用你需要的`Material-UI`组件。

这只是一个简单的介绍，如果想了解更多`node`相关，请去[Node官网](https://nodejs.org/en/)

