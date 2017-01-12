import React, {Component} from 'react';

import Card from './Card';
import {firebase, firebaseListToArray} from '../utils/firebase';


class Cards extends Component{
  constructor(props){
    super(props);

    this.state = {
      cards: []
    }
  }

  componentWillMount(){
    firebase.database()
      .ref('/cards')
      .on('value', data => {
        const cardData = firebaseListToArray(data.val());
          console.log('Card data', cardData);

          this.setState({
            cards: cardData
          })
      });
  }
  render(){
    const cards = this.state.cards.map(card => {
      return <Card key={card.id} question={card.question}/>
    })
    return (
      <section id="cards" className="container-fluid">
        <div className="row">

          {cards}

        </div>
      </section>
    )
  }
}

export default Cards;
