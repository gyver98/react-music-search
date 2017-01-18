import React, { Component } from 'react';
import SearchBar from './component/SearchBar/SearchBar';
import AlbumList from './component/AlbumList/AlbumList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AlbumList />
      </div>
    );
  }
}

export default App;
