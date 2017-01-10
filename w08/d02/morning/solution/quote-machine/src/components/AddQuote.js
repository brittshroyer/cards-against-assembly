import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import { hashHistory } from 'react-router';

class AddQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const quoteText = this.refs.quoteText.value;
    const author = this.refs.author.value;

    firebase.database()
      .ref('/quotes')
      .push({
        text: quoteText,
        author: author,
        created: Math.floor(Date.now() / 1000)
      }).then(data => {
        console.log('Saved the quote');
        this.refs.quoteText.value = '';
        this.refs.author.value = '';

        hashHistory.push('/');
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input
            className="form-control"
            type="text"
            ref="quoteText"
            placeholder="Quote" />
          <input
            className="form-control"
            type="text"
            ref="author"
            placeholder="Author" />
          <input
            className="btn btn-primary"
            type="submit"
            value="Save" />
        </form>
      </div>
    );
  }
}

export default AddQuote;
