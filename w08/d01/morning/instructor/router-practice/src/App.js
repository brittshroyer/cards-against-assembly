import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
// import './App.css';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active" activeStyle={{background:"blue"}}>Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active" activeStyle={{background:"blue"}}>About</Link></li>
          <li><Link to="/other-stuff" activeClassName="active" activeStyle={{background:"blue"}}>Other Stuff</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
