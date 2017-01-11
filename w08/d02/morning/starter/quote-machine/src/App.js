import React, { Component } from 'react';

import Home from './components/Home';
import Nav from './components/Nav';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

import { firebase } from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      user: {}
    }
  }
  //lifecycle method: if user is logged in, show user object, if not show empty object

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        console.log('Logged in: ', user);
        this.setState({user});
      } else {
        this.setState({ user: {} });
      }

    });
  }
  //if someone is not logged in, show login..if not show logout button and name of person,
  sessionButton(){
    if(!firebase.auth().currentUser){
      return <LoginButton> Log in with GitHub </LoginButton>;
    }else{
      return <LogoutButton>Logout{ this.state.user.displayName }</LogoutButton>;
    }
  }
  render() {
    const welcomeMessage = (firebase.auth().currentUser) ?
    <h4>Hi {this.state.user.displayName}!</h4>:
    '';
    return (
      <div className="container">
        {this.sessionButton()}
        <h1>Quote Machine</h1>
        {welcomeMessage}
        <Nav />

        <div className="content">
          { this.props.children || <Home /> }
        </div>
        <h2>"The thing about quotes from the internet is you can never determine their validity."<br></br>-Abraham Lincoln</h2>
      </div>
    );
  }
}

export default App;
