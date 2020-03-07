import React from 'react'
import data from './data.json'

console.log(data)
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
          {/* <ImageBackground source={album.images[1].url} style={{width: '300px', height: '300px'}}>
          </ImageBackground> */}
           { <div className="album-image" styles={{ backgroundImage:`url("${album.images[1].url}")` }}>
              <div className="hover-items">
                <img src="/public/icons/heart.svg"></img>
                <img src="/public/icons/play.svg"></img>
                <img src="/code/public/icons/dots.svg"></img>
              </div>
           </div> }
          {/* <img src={album.images[1].url}></img> */}
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
