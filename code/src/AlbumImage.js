import React from "react"
import {Icons} from './Icons'
// import data from './data.json's


export const AlbumImage = (props) => {
    let {image, album} = props;
  
    const styles = {
      backgroundImage:`url('${image.url}')`,
    }
  
    return (
      <>
      <a href={album.external_urls.spotify} className="album-image" id="albumImage" target="_blank" style={styles}>
      </a>
      <div className="hover-items" id="hoverItems">
      <Icons />
      </div>
      </>
    )}
  
