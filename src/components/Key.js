import React,{useContext,useState,useEffect} from 'react'
import {boxContent} from "../Context"
function Key({ke,incorrect}) {
    const {board,setBoard,theme,setTheme} =useContext(boxContent);
    const [keyTheme,setKeyTheme]=useState('');
    const {currentPosition,setCurrentPosition,onEnter,keyPress,onDelete,correctWords}=useContext(boxContent);

    // const styles={
    //     backgroundColor:`${(ke==='Delete' || ke==='Enter') && (white ? '#d3d6da' : '#818384')}`
    // }

    useEffect(()=>{

        if(theme==='white')
        {
          setKeyTheme('white-theme')
        }
        else if(theme==='dark')
        {
          setKeyTheme('default-dark')
        }


    },[theme])


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
      <button onClick={keyPressed}  className={`btn ${ (ke==='Delete' || ke==='Enter') ? keyTheme : incorrect}`}>{ke}</button>
  )
}

export default Key;