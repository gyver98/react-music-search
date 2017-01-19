import React, { Component } from 'react';
import SearchBar from './component/SearchBar/SearchBar';
import AlbumList from './component/AlbumList/AlbumList';
import Header from './component/Header/Header';
import * as musicApi from './services/music';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      tracks: [],
      trackId: null
    }
    this.currentPreview = null,
    this.getAlbums = this.getAlbums.bind(this);
    this.updateAlbums = this.updateAlbums.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.updateTracks = this.updateTracks.bind(this);
    this.playPreview = this.playPreview.bind(this);
  }

  getAlbums(artist) {
    musicApi.getAlbums(artist, this.updateAlbums);
  }

  updateAlbums(result) {
    this.setState({
      albums: result.albums.items
    })
  }

  getTracks(albumId) {
    musicApi.getTracks(albumId, this.updateTracks);
  }

  updateTracks(result) {
    this.setState({
      tracks: result.tracks.items,
      trackId: result.id
    })
  }

  playPreview(previewUrl) {
    
    if(this.currentPreview) {
      const currentAudioObj = this.currentPreview;
      currentAudioObj.pause();
      this.currentPreview = null;
    } 
      const newAudioObj = new Audio(previewUrl);
      this.currentPreview = newAudioObj;
      newAudioObj.play();
        
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar getAlbums={this.getAlbums}/>
        <AlbumList 
          albums={this.state.albums} 
          tracks={this.state.tracks} 
          trackId={this.state.trackId} 
          getTracks={this.getTracks}
          playPreview={this.playPreview} />
      </div>
    );
  }
}

export default App;
