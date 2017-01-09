import React, { Component } from 'react';

import NavLink from './NavLink';

class Nav extends Component {
  render() {
    return (
      <nav>
        <li><NavLink to="/" onlyActiveOnIndex>Memes</NavLink></li>
        <li><NavLink to="/add">Add Meme</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </nav>
    );
  }
}

export default Nav;
