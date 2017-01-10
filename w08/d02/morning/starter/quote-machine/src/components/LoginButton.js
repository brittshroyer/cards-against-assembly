import React, { Component } from 'react';

class LoginButton extends Component {
  render(){
    return (
      <button className="btn col-xs-2 col-xs-offset-8">{this.props.children}</button>
    )
  }
}

export default LoginButton;
