import React,{useContext,useEffect} from 'react'
import Switch from '@mui/material/Switch'
import {boxContent} from "../Context"
function Welcome() {
  const {white,setWhite}=useContext(boxContent)
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const style={
    color:white ? '#000' :'#fff'
  }

  useEffect(()=>{
    if(white)
    {
      document.body.style.backgroundColor='#fff';
    }
    else
    {
      document.body.style.backgroundColor='#121213'
    }
  },[white])


  console.log("Render")
  function changeTheme(){
    setWhite(pre=>!pre);
  }
  return (
    <div className={`header ${white ? 'border-white' : 'border-dark' }`}>
        <h1 style={style}>Wordle</h1> 
        <Switch className="switch" onClick={changeTheme}{...label} />
    </div>
  )
}

export default Welcome