import React from 'react'
import {Icons} from './Icons'
import data from './data.json'
import {AlbumImage} from './AlbumImage'
import {AlbumDetails} from './AlbumDetails'


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