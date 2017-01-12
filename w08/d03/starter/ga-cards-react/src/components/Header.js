import React, {Component} from 'react';

class Header extends Component{
  render(){
    return (
      <header className="navbar">
        <h1 className="pull-left">{this.props.title}</h1>
      </header>
    )
  }
}

export default Header;
