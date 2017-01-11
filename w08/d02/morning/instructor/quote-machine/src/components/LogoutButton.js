import React, { Component } from 'react';

class LogoutButton extends Component {
  render() {
    return (
      <button className="btn">{ this.props.children }</button>
    )
  }
}

export default LogoutButton;
