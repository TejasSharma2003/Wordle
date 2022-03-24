import React,{useEffect,useCallback,useContext,useState} from 'react'
import Key from "./Key"
import {boxContent} from "../Context"
function Keyboard() {
  const {onDelete,onEnter,keyPress,inCorrectWords,correctWords,almostWords,white}=useContext(boxContent)
  const {won,lost}=useContext(boxContent);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 =["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // console.log(correctWords);
  // console.log(almostWords);
  // console.log(inCorrectWords);

  const handleKeyPressed=useCallback((event)=>{

    if(event.key==="Enter")
    {
      onEnter();
    }
    else if(event.key==="Backspace" || event.key==="Delete")
    {
      onDelete();
    }
    else
    { 
      checkPressedkey(keys1,event);
      checkPressedkey(keys2,event);
      checkPressedkey(keys3,event);
    }
  })
  function checkPressedkey(keyNumber,event)
  {
    keyNumber.forEach(keyVal=>{
      if(event.key.toUpperCase()===keyVal)
      {
        keyPress(keyVal);
      }
    })

  }


  useEffect(()=>{
    if(!won || !lost )
    {
      document.addEventListener('keydown',handleKeyPressed)
      return ()=>{
        document.removeEventListener("keydown",handleKeyPressed);
      }
    }
  },[handleKeyPressed])

  return (
    <div className="keyboard" onKeyDown={handleKeyPressed}>
        <div className="first-row">
            {keys1.map(key=><Key incorrect={correctWords.includes(key)?'correct':almostWords.includes(key) ? 'almost':inCorrectWords.includes(key) ? 'error' : white ? 'white-theme' : 'default-dark'} ke={key}/>)}
        </div>
        <div className="middle-row">
          
            {keys2.map(key=><Key incorrect={correctWords.includes(key)?'correct':almostWords.includes(key) ? 'almost':inCorrectWords.includes(key) ? 'error' : white ? 'white-theme' : 'default-dark'} ke={key}/>)}
        </div>
        <div className="third-row">
            <Key  ke={"Enter"} />
            {keys3.map(key=><Key incorrect={correctWords.includes(key)?'correct':almostWords.includes(key) ? 'almost':inCorrectWords.includes(key) ? 'error' : white ? 'white-theme' :'default-dark'} ke={key}/>)}
            <Key  ke={"Delete"} />
        </div>
    </div>  
  )

}
               

export default Keyboard