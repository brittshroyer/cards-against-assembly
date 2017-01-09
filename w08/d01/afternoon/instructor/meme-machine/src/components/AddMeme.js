import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

class AddMeme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: 'http://placehold.it/240x200'
    }
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleSubmit(e) {
    e.preventDefault();

    const url = this.refs.url.value;

    firebase.database()
      .ref('/memes')
      .push({
        url: url
      }).then(data => {
        console.log('Saved the url: ', url);
        this.refs.url.value = '';
        this.context.router.push('/');
      });
  }

  handleChange(e) {
    const url = e.target.value;

    this.setState({
      imageUrl: url
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input
            className="form-control"
            type="text"
            ref="url"
            onChange={ this.handleChange.bind(this) }
            placeholder="Enter the URL of the meme" />
          <input
            className="btn btn-primary"
            type="submit"
            value="Save" />
        </form>

        <img src={ this.state.imageUrl } className="meme-img" alt="" />
      </div>
    );
  }
}

export default AddMeme;
