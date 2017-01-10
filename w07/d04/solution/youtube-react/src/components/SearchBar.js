import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input value="" placeholder="Search for videos" />
      </div>
    );
  }
}

export default SearchBar;
