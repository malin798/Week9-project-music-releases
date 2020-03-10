import React from 'react'
import data from './data.json'
import {Icons} from './Icons'

import { AlbumCard } from 'AlbumCard.js'

export const App = () => {
  return (
    <main className="all-albums">
      <AlbumCard />  
    </main>   
  )
}



