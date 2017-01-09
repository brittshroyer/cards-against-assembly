import React, { Component } from 'react';

import { firebase, firebaseListToArray } from '../utils/firebase';
import Meme from './Meme';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: []
    }
  }

  componentWillMount() {
    firebase.database()
      .ref('/memes')
      // .orderByChild('/memes')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        console.log('memes', results);

        this.setState({
          memes: results
        });
      });
  }

  render() {
    const memes = this.state.memes.map(meme => {
      return <li key={ meme.id } className="meme"><Meme memeObject={ meme } /></li>;
    });

    return (
      <ul className="memes">
        { memes.reverse() }
      </ul>
    );
  }
}

export default Home;
