import { configure, addDecorator } from '@storybook/react';
import React from 'react';

function loadStories() {
  require('./stories/index.js');
  // You can require as many stories as you need.
}

addDecorator((story) => (
  <div style={{padding: "20px"}}>
    {story()}
  </div>
));

configure(loadStories, module);