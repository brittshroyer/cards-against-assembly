import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';




class App extends Component {
  render() {
    return (
      <div className="container">

        <Header title="Cards Against Assembly" />

          <Nav />

          {this.props.children}


          <Footer />
        </div>    );
  }
}

export default App;
