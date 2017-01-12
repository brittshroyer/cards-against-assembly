import React, {Component} from 'react';
import {firebase} from '../utils/firebase';
import {hashHistory} from 'react-router';

class AddCard extends Component{
  constructor(props){
    super(props);

    this.state = {
      question: ''
    }
  }
  handleKeyUp(e){
    this.setState({
      question: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const questionText = this.refs.question.value;
    console.log(questionText);

    firebase.database()
      .ref('/cards')
      .push({
        question: questionText,
        created: Math.floor(Date.now() / 1000)
      }).then(data => {
        hashHistory.push('/');
      });
  }
  render(){
    return (
      <section className="container-fluid">
        <div className="row">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              ref="question"
              onKeyUp={this.handleKeyUp.bind(this)}
              type="text"
              className="question-input"
              placeholder="What's your question?" />
            <input className="btn btn-primary" type="submit" value="Save"/>
          </form>
          <br />
          <div className="card">
            <h4 className="card-title">{this.state.question}</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </section>
    )
  }
}

export default AddCard;
