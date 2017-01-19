import React from 'react';
import Album from '../Album/Album';
import './AlbumList.css';

const AlbumList = (props) => {
  const albums = props.albums.map(album => <Album key={album.id} album={album} />);

  return (
    <main>
      <section className="content">
        {albums}
      </section>
    </main>
  )
}

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired
}

export default AlbumList;