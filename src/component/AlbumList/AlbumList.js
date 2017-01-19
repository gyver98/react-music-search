import React from 'react';
import './AlbumList.css';

const AlbumList = (props) => {
  // const albums = props.albums.map(album => 
  //   <li>
  //     <img src={album.images[1].url} role="presentation"/>
  //     <p>{album.name}</p>
  //   </li>
  // );
  const albums = props.albums.map(album => 
    <div className="album-head">
      <img src={album.images[1].url} role="presentation"/>
      <section className="album-detail">
        <div>
          <p>{album.name}</p>
          <p>{album.type}</p>
        </div>
        <div>
          <i> &nbsp;Show Tracks</i>
        </div>
      </section>
    </div>
  )

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