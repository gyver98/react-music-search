import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
  const tracks = props.tracks.map((track) => <Track key={track.id} track={track} />);

  return(
    <ul className="track-list">{tracks}</ul>
  );
}

TrackList.propTypes = {
  tracks: React.PropTypes.array.isRequired
}

export default TrackList;