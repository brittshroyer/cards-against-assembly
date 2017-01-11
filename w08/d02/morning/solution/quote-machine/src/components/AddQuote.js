import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import { hashHistory } from 'react-router';

class AddQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {},
      showForm: false
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      const showForm = (user) ? true : false;

      this.setState({
        showForm: showForm
      });
    });

    if (firebase.auth().currentUser) {
      this.setState({
        showForm: true
      });
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
    const html = (this.state.showForm) ?
      (
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
      ) :
      <h3>Please log in to continue</h3>;

    return (
      <div>
        { html }
      </div>
    );
  }
}

export default AddQuote;
