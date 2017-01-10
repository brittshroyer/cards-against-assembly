import React, { Component } from 'react';

import NavLink from './NavLink';

class Nav extends Component {
  render() {
    return (
      <nav>
        <li><NavLink to="/" onlyActiveOnIndex>Quotes</NavLink></li>
        <li><NavLink to="/add">Add Quote</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </nav>
    );
  }
}

export default Nav;
