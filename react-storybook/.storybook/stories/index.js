import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import App from  '../../src/App';

storiesOf('App Component', module)
  .add('simple App',
    withInfo(`
      description or documentation about my component, supports markdown
      ~~~js
      <App/>
      ~~~
    `)(() =>
      <App/>
    )
  )
