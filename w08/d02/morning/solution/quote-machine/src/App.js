import React, { Component } from 'react';

import Home from './components/Home';
import Nav from './components/Nav';

import { firebase } from './utils/firebase';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: {} })
      }
    });
  }

  sessionButton() {
    if (!this.state.user.displayName) {
      return <LoginButton>Login with GitHub</LoginButton>;
    } else {
      return <LogoutButton>Logout</LogoutButton>;
    }
  }

  render() {
    return (
      <div className="container">
        { this.sessionButton() }
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
