import React, { Component } from 'react';

import Home from './components/Home';
import Nav from './components/Nav';

import { firebase } from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Quote Machine</h1>
        <Nav />

        <div className="content">
          { this.props.children || <Home /> }
        </div>
      </div>
    );
  }
}

export default App;
