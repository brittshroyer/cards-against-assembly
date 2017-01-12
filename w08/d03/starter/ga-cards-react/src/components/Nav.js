import React, {Component} from 'react';

import NavLink from './NavLink';

class Nav extends Component{
  render(){
    return (
      <nav className="tabs">
        <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
        <NavLink to="/add">Add a New Card</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    )
  }
}

export default Nav;
