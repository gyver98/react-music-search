import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <input type="text" placeholder="Enter your search terms" />
      </div>
    );
  }
}

export default SearchBar;