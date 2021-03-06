import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

import App from './App';
import Home from './components/Home';
import AddQuote from './components/AddQuote';
import About from './components/About';
import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/add" component={ AddQuote }/>
      <Route path="/about" component={ About }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
