import React, { Component } from 'react';

import Home from './components/Home';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Meme Machine</h1>
        <Nav />

        <div className="content">
          { this.props.children || <Home /> }
        </div>
      </div>
    );
  }
}

export default App;
