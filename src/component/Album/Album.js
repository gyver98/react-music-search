import React from 'react';

const Album = (props) => {
  return(
    <div className="album-head">
      <img src={props.album.images[1].url} role="presentation"/>
      <section className="album-detail">
        <div>
          <p>{props.album.name}</p>
          <p>{props.album.type}</p>
        </div>
        <div>
          <i> &nbsp;Show Tracks</i>
        </div>
      </section>
    </div>
  )   
}

Album.propTypes = {
  album: React.PropTypes.object.isRequired
}

export default Album;