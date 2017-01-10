import React, { Component } from 'react';

import { firebase, firebaseListToArray } from '../utils/firebase';
import Quote from './Quote';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    }
  }

  componentWillMount() {
    firebase.database()
      .ref('/quotes')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        console.log('quotes', results);

        this.setState({
          quotes: results
        });
      });
  }

  render() {
    const quotes = this.state.quotes.map(quote => {
      return <li key={ quote.id } className="quote"><Quote quoteObject={ quote } /></li>;
    });

    return (
      <ul className="quotes">
        { quotes.reverse() }
      </ul>
    );
  }
}

export default Home;
