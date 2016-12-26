import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import Main from './app/Main';

import './index.scss';

/*
* Substitutes the DOM element with id='root' with the React component 'Routes'
*/
render(
  <Main/>,
  document.getElementById('root')
);
