import React, { Component } from 'react';

class Meme extends Component {
  render() {
    return <img src={ this.props.memeObject.url } alt="" />;
  }
}

export default Meme;
