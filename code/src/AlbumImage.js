import React from "react"
import {Icons} from './Icons'

export const AlbumImage = (props) => {
    let {image, album} = props;
   
    return (
      <>
      <a className="album-link" href={album.external_urls.spotify} target="_blank">
      <section className="album-cover">
        
      <div className="hover-items" id="hoverItems">
            <Icons />
            </div>
        
          <img className="album-image" src={image.url}></img>
          </section>
          </a>
          
         </>
     
    )
    }
