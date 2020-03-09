import React from 'react'
import {Icons} from './Icons'
import data from './data.json'

const AlbumImage = (props) => {
  const styles = {
    backgroundImage:`url('${props.image.url}')`,
  }

  return (
    <div className="album-image" style={styles}>
      <div className="hover-items" >
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
          <span>{artist.name}&nbsp; </span>
          {/* vet inte hur vi ska få ett kommatecken mellan varje artist.. :P */}
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
        <AlbumImage image={album.images[0]}/>
        <div className="album-details">
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