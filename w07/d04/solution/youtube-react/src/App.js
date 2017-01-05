import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoMain from './components/VideoMain';
import VideoList from './components/VideoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoMain />
        <VideoList />
      </div>
    );
  }
}

export default App;
