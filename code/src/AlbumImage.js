import React from "react"
import {Icons} from './Icons'

export const AlbumImage = (props) => {
    let {image, album} = props;
   
    return (
      <section className="album-cover">
        
        <a href={album.external_urls.spotify} target="_blank">
          <img className="album-image" src={image.url}></img>
          </a>
          <div className="darken-image">
            <div className="hover-items" id="hoverItems">
            <Icons />
            </div>
          </div>
        
      </section>
    )
    }
