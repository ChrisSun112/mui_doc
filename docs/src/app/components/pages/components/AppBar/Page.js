import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';
import appBarReadmeText from './README';
import AppBarExampleIcon from './ExampleIcon';
import appBarExampleIconCode from '!raw!./ExampleIcon';
import AppBarExampleIconButton from './ExampleIconButton';
import appBarExampleIconButtonCode from '!raw!./ExampleIconButton';
import AppBarExampleComposition from './ExampleComposition';
import appBarExampleIconComposition from '!raw!./ExampleComposition';
import appBarCode from '!raw!material-ui/AppBar/AppBar';

const AppBarPage = () => (
  <div>
    <Title render={(previousTitle) => `App Bar - ${previousTitle}`} />
    <MarkdownElement text={appBarReadmeText} />
    <CodeExample
      code={appBarExampleIconCode}
      title="简单示例"
    >
      <AppBarExampleIcon />
    </CodeExample>
    <CodeExample
      code={appBarExampleIconButtonCode}
      title="按钮示例"
    >
      <AppBarExampleIconButton />
    </CodeExample>
    <CodeExample
      code={appBarExampleIconComposition}
      title="组合示例"
    >
      <AppBarExampleComposition />
    </CodeExample>
    <PropTypeDescription code={appBarCode} />
  </div>
);

export default AppBarPage;
