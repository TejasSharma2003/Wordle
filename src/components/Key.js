import React,{useContext,useState,useEffect} from 'react'
import {boxContent} from "../Context"
function Key({ke,incorrect}) {
    const {board,setBoard,white} =useContext(boxContent)
    const {currentPosition,setCurrentPosition,onEnter,keyPress,onDelete,correctWords}=useContext(boxContent);

    // const styles={
    //     backgroundColor:`${(ke==='Delete' || ke==='Enter') && (white ? '#d3d6da' : '#818384')}`
    // }
    function keyPressed()   
    {
        if(ke==="Enter")
        {
            onEnter();
        }
        else if(ke==="Delete")
        {
            onDelete();
        }
        else{
            keyPress(ke);
        }
    }
  return (
      <button onClick={keyPressed}  className={`btn ${ (ke==='Delete' || ke==='Enter') ? (white ? 'white-theme' :'default-dark') : incorrect}`}>{ke}</button>
  )
}

export default Key