import React from 'react';
import Album from '../Album/Album';
import './AlbumList.css';

const AlbumList = (props) => {
  const albums = props.albums.map(album => 
    <Album 
      key={album.id} 
      album={album} 
      tracks={props.tracks} 
      trackId={props.trackId} 
      getTracks={props.getTracks}
      playPreview={props.playPreview}
    />
  );

  return (
    <main>
      <section className="content">
        {albums}
      </section>
    </main>
  )
}

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
  tracks: React.PropTypes.array.isRequired,
  getTracks: React.PropTypes.func.isRequired,
  playPreview: React.PropTypes.func.isRequired
}

export default AlbumList;