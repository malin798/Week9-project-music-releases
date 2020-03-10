import React from 'react'
import {Icons} from './Icons'
import data from './data.json'

const AlbumImage = (props) => {
  let {image, album} = props;

  const styles = {
    backgroundImage:`url('${props.image.url}')`,
  }

  return (
    <a href={props.album.external_urls.spotify} className="album-image" id="albumImage" target="_blank" style={styles}>
      <div className="hover-items" id="hoverItems">
        <Icons />
      </div>
    </a>
  )}

const AlbumDetails = (props) => {
 
  let {artists, album} = props;
  return (
    <>
      <p className="album-name">
        {album.name}
      </p>
      {props.artists.map(artist => {
        return (
        <a href= {artist.external_urls.spotify} className="artists-name" target="_blank">
        <p className="artist">
        <span>{artist.name}&nbsp; </span>
        {/* vet inte hur vi ska få ett kommatecken mellan varje artist.. :P */}
        </p>
        </a>
        )})}
    </>
  )}

const Album = () => {
  return (
    data.albums.items.map(album => {
      return (
        <article className="album-card" key={album.id} >
        <AlbumImage image={album.images[0]} album={album} />
        <div className="album-details">
        <AlbumDetails artists={album.artists} album={album}/>
        </div>
        </article> 
      )}))}


export const AlbumCard = () => {
  return (
    <Album/>
  )}