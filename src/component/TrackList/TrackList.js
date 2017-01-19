import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
  const tracks = props.tracks.map((track) => <Track key={track.id} track={track} playPreview={props.playPreview} />);
  
  return(
    <ul className={ props.tracks.length > 0 ? 'track-list' : 'no-track-list' }>{tracks}</ul>
  );
}

TrackList.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  playPreview: React.PropTypes.func.isRequired
}

export default TrackList;