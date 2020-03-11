import React from 'react'


export const AlbumDetails = (props) => {

  const {artists, album} = props;
  return (
    <>
      <p className="album-name">
        {album.name}
      </p>
      {artists.map(artist => {
        return (
        <a href= {artist.external_urls.spotify} className="artists-name" target="_blank">
        <p className="artist" key={artist.id}>
        {artist.name}&nbsp; 
        </p>
        </a>
        )})}
    </>
)}