import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

export default class LoginButton extends Component {
  handleClick(e) {
    e.preventDefault()
    let provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <button onClick={ this.handleClick.bind(this) }>
        {this.props.children}
      </button>
    )
  }
}
