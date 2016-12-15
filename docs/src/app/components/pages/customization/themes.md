### 预定义主题

Material-UI包含两个基本主题: light 和 dark。他们都位于 [`material-ui/styles/baseThemes/`](https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/)中。我们可以模仿它们定制自己的主题。 [`lightBaseTheme`](https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js)是Material-UI默认主题，我们什么都不用做，页面默认采用`lightBaseTheme`主题。对于[`darkBaseTheme`](https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/darkBaseTheme.js)主题，可以按照下面这种方式使用。

```js
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

export default Main;
```

### 如何工作
要实现可定制的程度，可以参考上面的示例。Material-UI使用单一的JS对象(muiTheme),在默认情况下，`muiTheme`对象是基于[`lightBaseTheme`](https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js)。

 `muiTheme`对象包含下面属性:

 - `spacing`: 用于定义组件间距;
 - `fontFamily` 可以改变默认字体;
 - `palette` 用于改变组件颜色;
 - `zIndex` 设置组件的层次级别；
 - `isRtl` 设置从右到左模式.
 - There is also one key for each component so you can use to customize them individually:
  - `appBar`
  - `avatar`
  - ...

### 自定义主题

为了自定义 `muiTheme` 你必须使用 `getMuiTheme()` 来定义它，并且里面要包含你想要自定义的属性,然后使用`<MuiThemeProvider/>`挂载组件。


```js
import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

export default Main;
```

在内部，Material-UI组件使用React context属性来实现主题化，

Internally, Material-UI components use React's context feature to implement theming.
In fact, context is very convenient for concepts like theming, which are usually
implemented in a hierarchical manner.
However, it should be considered **an implementation detail**.

### Using the `muiTheme` on your custom components

In some case to keep the interface consistent you want to access the `muiTheme`
variable provided by the `MuiThemeProvider` component.
To do so, we expose a higher-order component: `muiThemeable`.
Here is an example:

```js
import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const DeepDownTheTree = (props) => (
  <span style={{color: props.muiTheme.palette.textColor}}>
    Hello World!
  </span>
);

export default muiThemeable()(DeepDownTheTree);
```

### API

The items listed below are everything related to how Material-UI's theme work.

#### `getMuiTheme(muiTheme)`

This function takes in a `muiTheme`, it will use this parameter to computes and returns an enhanced `muiTheme`.

Keep in mind, any changes to the theme object must appear as another call
to this function.
**Never** directly mutate the theme as the effects will not be reflected in any component
until another render is triggered for that component leaving your application
in a moody state.

To see what are the values you can override, use the
[source](https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js).
The `lightBaseTheme` object looks like this (these are the defaults):

```js
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from '../colors';
import {fade} from '../../utils/colorManipulator';
import spacing from '../spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
```

#### `<MuiThemeProvider>`

This component takes a theme as a property and passes it down with context.
This should preferably be at the root of your component tree. The first
example demonstrates it's usage.

#### `muiThemeable()`

This higher-order component wraps another component to provide a `muiTheme` property.
Pass in your component and it will return the wrapped component.
