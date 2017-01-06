import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          onKeyUp={ this.props.searchTermChanged }
          placeholder="Search for videos" />
      </div>
    );
  }
}

export default SearchBar;
