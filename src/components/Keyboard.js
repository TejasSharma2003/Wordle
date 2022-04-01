import React,{useEffect,useCallback,useContext,useState} from 'react'
import Key from "./Key"
import {boxContent} from "../Context"
function Keyboard() {
  const {onDelete,onEnter,keyPress,inCorrectWords,correctWords,almostWords,theme,setTheme}=useContext(boxContent)
  const {won,lost}=useContext(boxContent);
  const [keyboardTheme,setKeyboardTheme]=useState('')
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 =["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // console.log(correctWords);
  // console.log(almostWords);
  // console.log(inCorrectWords);

  useEffect(()=>{
    if(theme==='white')
    {
      setKeyboardTheme('white-theme')
    }
    else if(theme==='dark')
    {
      setKeyboardTheme('default-dark')
    }

  },[theme])
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
        <div className="first-row colums">
            {keys1.map(key=><Key incorrect={correctWords.includes(key)?'correct':almostWords.includes(key) ? 'almost':inCorrectWords.includes(key)  ? 'error' : keyboardTheme} ke={key}/>)}
        </div>
        <div className="middle-row colums ">
          
            {keys2.map(key=><Key incorrect={correctWords.includes(key)?'correct':almostWords.includes(key) ? 'almost':inCorrectWords.includes(key)  ? 'error' :keyboardTheme} ke={key}/>)}
        </div>
        <div className="third-row colums">
            <Key  ke={"Enter"} />
            {keys3.map(key=><Key incorrect={correctWords.includes(key)?'correct':almostWords.includes(key) ? 'almost':inCorrectWords.includes(key)  ? 'error' : keyboardTheme} ke={key}/>)}
            <Key  ke={"Delete"} />
        </div>
    </div>  
  )

}
               

export default Keyboard