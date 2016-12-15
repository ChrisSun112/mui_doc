import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * 这个例子左边使用了 [IconButton](/#/components/icon-button) 和 通过`onTouchTap`属性实现可点击的`title`，
 *  右边是一个 [FlatButton](/#/components/flat-button) .
 */
const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

export default AppBarExampleIconButton;
