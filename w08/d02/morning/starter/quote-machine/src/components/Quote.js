import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.quoteObject.text }</h3>
        <p>{ this.props.quoteObject.author }</p>
      </div>
    )
  }
}

export default Quote;
