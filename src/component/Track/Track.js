import React from 'react';
import './Track.css';
import { durationDisplay } from '../../helpers';

const Track = (props) => {
  return (
    <li>
      <p>{props.track.track_number}.{props.track.name}</p>
      <p>{durationDisplay(props.track.duration_ms)}</p>
      <p><span class="play-button">Play</span></p>
    </li>
  );
}

Track.propTypes = {
  track: React.PropTypes.object.isRequired
}

export default Track;