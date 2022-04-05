import React,{useContext,useEffect,useState} from 'react'
import Switch from '@mui/material/Switch'
import {boxContent} from "../Context"
import Restart from  "./Restart";
function Welcome() {
  const {theme,setTheme}=useContext(boxContent);
  const [welcometheme,setWelcometheme]=useState('');
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const style={
    color:theme==='white' ? '#000' :'#fff'
  }

  useEffect(()=>{
    if(theme==='white')
    {
      document.body.style.backgroundColor='#fff';
      setWelcometheme('border-white');
    }
    else if(theme==='dark')
    {
      document.body.style.backgroundColor='#121213'
      setWelcometheme('border-dark');

    }
  },[theme])


  function changetheme(){
    if(theme==='white')
    {
      setTheme('dark')
    }
    else
    {
      setTheme('white');
    }
  }
  return (
    <div className={`header ${welcometheme}`}>
        <Restart />
        <h1 style={style}>Wordle</h1> 
        <Switch className="switch" onClick={changetheme}{...label} />
    </div>
  )
}

export default Welcome