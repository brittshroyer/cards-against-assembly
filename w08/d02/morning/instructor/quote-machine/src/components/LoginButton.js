import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return (
      <button className="btn">{ this.props.children }</button>
    )
  }
}

export default LoginButton;
