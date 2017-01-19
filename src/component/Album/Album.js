import React from 'react';
import TrackList from '../TrackList/TrackList'; 
import './Album.css';

const Album = (props) => {
  return(
    <div className="album-wrapper">
      <div className="album-head">
        <img src={props.album.images[1].url} role="presentation"/>
        <section className="album-detail">
          <div>
            <p>{props.album.name}</p>
            <p>{props.album.type}</p>
          </div>
          <div>
            <button onClick={() => props.getTracks(props.album.id)}>Show Tracks</button>
          </div>
        </section>
      </div>
      <TrackList 
        tracks={props.album.id === props.trackId ? props.tracks : []}
        playPreview={props.playPreview} 
      />
    </div>
  )   
}

Album.propTypes = {
  album: React.PropTypes.object.isRequired,
  getTracks: React.PropTypes.func.isRequired
}

export default Album;