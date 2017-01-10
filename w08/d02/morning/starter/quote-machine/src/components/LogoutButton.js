import React, { Component } from 'react';

class LogoutButton extends Component {
  render(){
    return (
      <button className='btn col-xs-1 col-xs-offset-1'>{this.props.children}</button>
    )
  }
}

export default LogoutButton;
