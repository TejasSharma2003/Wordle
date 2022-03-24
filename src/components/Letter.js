import React, { useContext, useState, useEffect, useCallback } from "react";
import { boxContent } from "../Context";
function Letter({ position, attempt }) {
  const {
    board,
    currentPosition,
    word,
    white,
    currPos,
    setAlmostWords,
    setCorrectWords,
    setInCorrectWords,
  } = useContext(boxContent);
  let correct;
  let apply;
  let almost;
  if (word) {
    correct = board[position][attempt] === word[attempt];
    almost =
      !correct &&
      board[position][attempt] !== "" &&
      word.includes(board[position][attempt]);
    if (currentPosition.position > position) {
      apply =
        currentPosition.position > position && correct
          ? "correct"
          : almost
          ? "almost"
          : "error";
    }
  }

  // useEffect(()=>{setColor(apply)},[apply])

  useEffect(() => {
    if (!correct && !almost && board[position][attempt] !== "") {
      setInCorrectWords((pre) => [...pre, board[position][attempt]]);
    } else if (correct && !almost && board[position][attempt] !== "") {
      setCorrectWords((pre) => [...pre, board[position][attempt]]);
    } else if (almost && !correct && board[position][attempt] !== "") {
      setAlmostWords((pre) => [...pre, board[position][attempt]]);
    }
  }, [currentPosition.position]);
  // console.log("error" || 'no-border');
  return <div  className={`box ${apply} ${white ?'letter-white-theme' :'letter-dark-theme'} `}>{board[position][attempt]}</div>;
}

export default Letter;
