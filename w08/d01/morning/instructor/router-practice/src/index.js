import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import NotFound from './NotFound';
import Home from './Home';
import About from './About';
import Stuff from './Stuff';
// import './index.css';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/other-stuff" component={Stuff}/>
    </Route>
  </Router>),
  document.getElementById('root')
);
