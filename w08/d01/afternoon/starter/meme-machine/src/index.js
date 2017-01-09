import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/Home';
import AddMeme from './components/AddMeme';
import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/add" component={ AddMeme }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
