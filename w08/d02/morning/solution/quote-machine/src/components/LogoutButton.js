import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

export default class LogoutButton extends Component {
  handleClick(e) {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <button onClick={ this.handleClick.bind(this) }>
        { this.props.children }
      </button>
    )
  }
}
