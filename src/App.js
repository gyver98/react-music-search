import React, { Component } from 'react';
import SearchBar from './component/SearchBar/SearchBar';
import AlbumList from './component/AlbumList/AlbumList';
import * as musicApi from './services/music';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    }
    this.getAlbums = this.getAlbums.bind(this);
    this.updateAlbums = this.updateAlbums.bind(this);
  }

  getAlbums(artist) {
    musicApi.getAlbums(artist, this.updateAlbums);
  }

  updateAlbums(result) {
    this.setState({
      albums: result.albums.items
    })
  }

  render() {
    return (
      <div>
        <SearchBar getAlbums={this.getAlbums}/>
        <AlbumList albums={this.state.albums}/>
      </div>
    );
  }
}

export default App;
