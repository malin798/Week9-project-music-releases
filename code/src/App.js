import React from 'react'
import data from './data.json'
import {Icons} from './Icons'

import { AlbumCard } from 'AlbumCard.js'

console.log(data)




// const styles = {
//   backgroundImage:`url("${album.images[1].url})`,

// }

export const App = () => {
  return (
    <main className="all-albums">
      <AlbumCard />  
    </main>   
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
