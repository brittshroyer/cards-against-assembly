import React, { Component } from 'react';

import Home from './components/Home';
import Nav from './components/Nav';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

import { firebase } from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      user: {}
    }
  }

  render() {
    return (
      <div className="container">
        <LoginButton>Login with Github</LoginButton>
        <LogoutButton>Logout</LogoutButton>
        <h1>Quote Machine</h1>
        <Nav />

        <div className="content">
          { this.props.children || <Home /> }
        </div>
        <h2>"The thing about quotes from the internet is you can never determine their validity."<br></br>-Abraham Lincoln</h2>
      </div>
    );
  }
}

export default App;
