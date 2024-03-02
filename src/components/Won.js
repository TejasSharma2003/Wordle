import React,{useContext,useState} from 'react'
import {boxContent} from "../Context"
//condition if lost or won
function Won() { 
    const {lost,won,word}=useContext(boxContent);
  return (
    <div className={`won-dialog ${won ? 'won' : lost ? 'won':'' }`}>{won ? <span>Brilliant</span> : lost ? <span>{word}</span> : ''}</div>
  )
}

export default Won;
