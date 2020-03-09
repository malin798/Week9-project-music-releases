import React from 'react'
import {Icons} from './Icons'
import data from './data.json'

const AlbumImage = (props) => {
  const styles = {
    backgroundImage:`url('${props.image.url}')`,
  }

  return (
    <div className="album-image">
      <div className="hover-items" style={styles}>
        <Icons />
      </div>
    </div>
  )
}

const AlbumDetails = (props) => {
  let {artists, album} = props;
  console.log("artists", artists)
  return (
    <>
      <p className="album-name">
        {album.name}
      </p>

      <div className="artists-name">
        {props.artists.map(artist => {
          return (
          <p className="artist">
          {artist.name}
          {/* De lägger sig bara på rad... inget mellanrum mellan dom när det är flera..  */}
          </p>
        
          )
    
      })
}
</div>
      
    </>
  )
}

const Album = () => {
  return (
    data.albums.items.map(album => {
        console.log("album",album)
      return (
        <article className="album-card" key={album.id} >
        <AlbumImage image={album.images[1]}/>
        <div>
        <AlbumDetails artists={album.artists} album={album}/>
        </div>
        </article> 
      )}
  )
)}



export const AlbumCard = () => {
  return (
    <Album/>
  )
}