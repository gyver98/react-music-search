import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.props.getAlbums(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div className="searchbar">
        <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleTextChange} placeholder="Enter your search terms" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  getAlbums: React.PropTypes.func.isRequired
}

export default SearchBar;