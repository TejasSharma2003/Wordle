import React, { useContext, useState, useEffect, useCallback } from "react";
import { boxContent } from "../Context";
// import Animate from "animate.css-react";
function Letter({ position, attempt , shakeEffect }) {
  const {
    board,
    currentPosition,
    word,
    theme,
    currPos,
    setAlmostWords,
    setCorrectWords,
    setInCorrectWords,
    setTheme
  } = useContext(boxContent);
  const [letterTheme,setLetterTheme]=useState('');
  let correct;
  let apply;
  let almost;
  if (word) {
    console.log( board[position][attempt], word[attempt]);
    correct = board[position][attempt] === word[attempt];
    almost =
      !correct &&
      board[position][attempt] !== "" &&
      word.includes(board[position][attempt]);
    if (currentPosition.position > position) {
      apply =
        currentPosition.position > position && correct
          ? "letter-correct"
          : almost
          ? "letter-almost"
          : "letter-error";
    }
  }


  useEffect(()=>{
    if(theme==='white')
    {
      setLetterTheme('letter-white-theme')
    }
    else if(theme==='dark')
    {
      setLetterTheme('letter-dark-theme')
    }
  },[theme])


  useEffect(() => {
    if(currentPosition.position > position)
    {
      if (!correct && !almost && board[position][attempt] !== "") {
        setInCorrectWords((pre) => [...pre, board[position][attempt]]);
      } else if (correct && !almost && board[position][attempt] !== "") {
        setCorrectWords((pre) => [...pre, board[position][attempt]]);
      } else if (almost && !correct && board[position][attempt] !== "") {
        setAlmostWords((pre) => [...pre, board[position][attempt]]);
      }
    }
  }, [currentPosition.position]);


  return (
    <>
      <div
        className={`box ${apply} ${letterTheme} `}
      >
        {board[position][attempt]}
      </div>
    
    </>
  );
}

export default Letter;
