## Styles
所有Material-UI组件样式都被定义为**inline**，关于为什么做出这样的决定请访问[Refactor CSS into Javascript](https://github.com/callemall/material-ui/issues/30)，您也可以在下面留言说明您的看法。

然而，这种方法我们也遇到了很大的局限性，我们正在逐步的修改这种做法。你可以访问这个[讨论主题](https://github.com/callemall/material-ui/issues/4066)了解更多，或进入[presentation](https://github.com/oliviertassinari/a-journey-toward-better-style)，这里对`inline`局限性都做了说明。

列出一些局限:

 - 每次渲染都有重新编译所有样式，带来比较差的性能；
 - 调试问题
 - 服务端的多媒体问题
 - 服务端伪元素
 - 长时间可能会引起服务端的冲突(E.g. `:hover`)
