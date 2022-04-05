import React,{useState,useContext} from 'react'
import {boxContent} from "../Context"
import {container} from './container';
import { wordBank  } from '../words';
import "../styles/Restart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
function Restart() {



    const {board,setBoard,theme,currentPosition,generateWord,createWord,word,setWord,setCurrentPosition,setCorrectWords,setInCorrectWords,setAlmostWords,setWon
        ,setLost}=useContext(boxContent);
    // console.log(board);
    function restart()
    {
        setBoard([
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ]);
        setCurrentPosition({
            attempt:0,
            position:0
        })
        setCorrectWords([])
        setInCorrectWords([])
        setAlmostWords([])
        setWon(false);
        setLost(false);
        setWord(generateWord())
        localStorage.setItem(
          "GameDefault",
          JSON.stringify({
            Theme: theme,
            attempt: 0,
            position: 0,
            board: board,
            word:word,
          })
        );

    }
  return (
    <>
    <FontAwesomeIcon className={`restartBtn ${theme==='white'?'whiteRestart':'blackRestart'}`}onClick={restart} icon={faArrowsRotate} />
    </>
  )
}

export default Restart