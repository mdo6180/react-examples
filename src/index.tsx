import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header, Header2 } from './header';


ReactDOM.render(
  <div>
    <Header text="Hello World!!!"/>
    <Header2 text="Hello"/>
    <Header2 />
  </div>,
  document.querySelector('#root')
)