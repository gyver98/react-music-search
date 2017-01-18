import React from 'react';
import './AlbumList.css';

const AlbumList = (props) => {
  const albums = props.albums.map(album => 
    <li>
      <img src={album.images[1].url} role="presentation"/>
      <p>{album.name}</p>
    </li>
  );

  return (
    <ul>
      {albums}
    </ul>
  )
}

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired
}

export default AlbumList;