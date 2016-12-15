## 安装

Material-UI 可以使用 [npm package](https://www.npmjs.org/package/material-ui)安装.

### react-tap-event-plugin

Material-UI使用[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)来监听touch/tap/click 事件，使之得到快速的响应，这个插件是临时的，一旦React的官方发布相应的插件，我们将马上去掉。但是， 在那之前，你一定要在你的应用启动时注入这个插件。

```js
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
```

`react-tap-event-plugin` 对React所有组件都提供了一个 `onTouchTap()` 方法，去处理手机端的点击事件，快速响应我们的应用程序。这对于`button`非常有用。

### Roboto 字体

Material-UI 采用 google [Roboto](http://www.google.com/fonts/specimen/Roboto)
字体，所以请确保在项目中引入字体。

关于Roboto字体详细介绍请参考： [Roboto 介绍](http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500)


### ES 编译器
我们这里的示例都使用了ECMAScript规范中的```stage-1```功能，要在您本地运行这些示例，您可能还要安装Babel插件来解析ES语法，这里是[Babel](http://babeljs.io/docs/plugins/preset-stage-1/)的介绍。
