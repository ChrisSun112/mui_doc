## 服务端渲染

当使用Material-UI服务端呈现时，服务端和客户端环境必须一致。这里使用了两个技术。

### Autoprefixer

首先，Material-UI必须提供相同的user agent给浏览器前缀后处理程序。在客户端，user agent默认值是`navigator.userAgent`，在服务端，`navigator`是`undefined`，所以需要用Material-UI来定义。

`userAgent` 可以是下面的值:

- 大部分的用户代理类似这样：
`'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36'`
- `'all'` 允许所有的用户代理前缀。
- `false` 不允许用户代理前缀。

我们依赖 [muiTheme](/#/customization/themes) 在组件中使用户代理。
示例，我们可以像下面这样使用。

```js
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: req.headers['user-agent'],
});

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>Hello world</div>
  </MuiThemeProvider>
);

export default Main;
```

### process.env.NODE_ENV
您还需要在客户端和服务器端使用相同的 `process.env.NODE_ENV`。否则，校验不匹配。

我们会在开发环境中进行style完整性检查。因此在生产环境中，为了提高样式的呈现速度，请确保您设置了 `process.env.NODE_ENV` 为`production`。
