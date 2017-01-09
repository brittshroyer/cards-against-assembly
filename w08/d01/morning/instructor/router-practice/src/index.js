import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

import App from './App';
import NotFound from './NotFound';
// import './index.css';

ReactDOM.render(
  (<Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="*" component={NotFound}/>
  </Router>),
  document.getElementById('root')
);
