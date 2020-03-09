import React from 'react'

export const Heart = () => { 
  return (
    <img className="icon" src="./icons/like.svg"></img>
  )
}

export const Play = () => {
  return (
   <img className="icon big" src="./icons/play-button-svgrepo-com.svg"></img>
  )
}

export const Dots = () => {
  return (
    <img className="icon" src="./icons/dots.svg"></img>
  )
}


export const Icons = () => {
  return (
    <>
      
      <Heart />
      <Play />
      <Dots />
      
    </>
  )
}