import React from 'react'
import data from './data.json'
import { Icons } from 'Icons.js'

console.log(data)


// const Albums = () => {
//   return (
  
//   )
// }

// const styles = {
//   backgroundImage:`url("${album.images[1].url})`,

// }

export const App = () => {
  return (
    
    <div className="all-albums">
    {data.albums.items.map(album => {
        return (
        <div className="album-card" >
          <div className="album-image">
            <Icons />
          </div>
          {/* <img src={album.images[1].url}>
          </img> */}
          <p className="album-name">{album.name}</p>
          <p className="artist-name">{album.artists[0].name}</p>
        </div>
        )
      })}
    </div> 
  )
}

// export const App = () => {
//   return (
//     <div className="App">
//       {data.albums.items.map(item => {
//         return <div key={item.id}>{item.name}</div>;
//       })}
//     </div>
//   );
// };
