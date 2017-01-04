import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  handleClick() {
    let currentValue = this.state.clicks;
    let newValue = ++currentValue;

    this.setState({
      clicks: newValue
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ this.props.title }</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={ this.handleClick.bind(this) }>Click me</button>
          Number of clicks: { this.state.clicks }
        </p>
      </div>
    );
  }
}

export default App;
