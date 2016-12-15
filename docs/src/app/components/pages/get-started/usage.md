## 用法

从v0.15.0开始， Material-UI组件支持主题，最便捷的使用方式是通过MuiThemeProvider向你的项目中插入主题，接下来就可以使用组件了。

我们可以从下面简单的例子开始：

**./App.js**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

**./MyAwesomeReactComponent.js**
```jsx
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

export default MyAwesomeReactComponent;
```
请查阅其他的文档来看他们是如何被导入的。

注意在上面的例子，我们用了：
```js
import RaisedButton from 'material-ui/RaisedButton';
```

instead of
```js
import {RaisedButton} from 'material-ui';
```
这样可以使项目编译更快，而且输出的build文件更小。要查看导入的Material-UI组件完整映射，请参考Material-UI npm 包根目录下的 /index.js。

### 自定义主题
我们实现了一个默认的主题来生成所有Material-UI的组件，要自定义自己喜欢的主题也是很容易的。这个可以通过以下两种方法来完成：



- [组件主题](#/customization/themes), 你可以使用自定义的主题来改变这些组件的风格。


- [inline样式](#/customization/styles), 可以重写实现个性样式。
