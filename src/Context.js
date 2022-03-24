import { createContext,useEffect, useState } from "react";
import { container } from "./components/container";
import {wordBank} from "./words"


export const boxContent = createContext();

const Context = ({ children }) => {
  const [board, setBoard] = useState(container);
  const [currentPosition, setCurrentPosition] = useState({
    attempt: 0,
    position: 0,
  });
  const [words,setWords]=useState(new Set());
  const [inCorrectWords,setInCorrectWords]=useState([]);
  // const [color,setColor]=useState('');
  const [correctWords,setCorrectWords]=useState('');
  const [almostWords,setAlmostWords]=useState('')
  const [word,setWord]=useState();
  const [won,setWon]=useState(false);
  const [lost,setLost]=useState(false);
  const [white,setWhite]=useState(false)
  console.log(word);
  useEffect(() => {

    setWord(()=>{
      const randomWordIndex=Math.floor(Math.random()*wordBank.length);
      return wordBank[randomWordIndex].toUpperCase();
    })
    const allWords=new Set(wordBank);
    setWords(allWords)
  }, [])
  
  const [currPos,setCurrPos]=useState();
  const onEnter = () => {
    if (currentPosition.attempt !==5) return ;
   else
    {
      let userWord='';
      let i;
      for(i=0;i<5;i++)
      {
        userWord+=board[currentPosition.position][i]
      }
      if(words.has(userWord.toLowerCase()))
      {
        setCurrPos(currentPosition.position);
      setCurrentPosition((prePos) => {
        return { ...prePos, position: prePos.position + 1, attempt: 0 };
       });
      if(userWord===word)
       {
         setWon(true);
       }
       else if(currentPosition.position===5)
       {
         console.log('You lost')
         setLost(true);
        }
        console.log(currentPosition);
        
      }
      else
      {
        alert("Not a valid Word")
      }
    }

  };




  const onDelete = () => {
    if (currentPosition.attempt === 0) return;
    const newBoard = [...board];
    newBoard[currentPosition.position][currentPosition.attempt - 1] = " ";
    setBoard(newBoard);
    setCurrentPosition((prePos) => {
      return { ...prePos, attempt: prePos.attempt - 1 };
    });
  };

  const keyPress = (ke) => {
    if (currentPosition.attempt > 4) {
        return;
    }
    else
    {
        const newBoard = [...board];
        newBoard[currentPosition.position][currentPosition.attempt] = ke;
        setBoard(newBoard);
        setCurrentPosition((prePos) => {
          return { ...prePos, attempt: prePos.attempt + 1 };
        });
    }
  };
  return (
    <boxContent.Provider
      value={{
        board,
        setBoard,
        currentPosition,
        setCurrentPosition,
        onEnter,
        onDelete,
        keyPress,
        currPos,
        setCurrPos,
        inCorrectWords,
        setInCorrectWords,
        correctWords,
        setCorrectWords,
        almostWords,
        setAlmostWords,
        word,
        won,
        lost,
        white,
        setWhite

      }}
    >
      {children}
    </boxContent.Provider>
  );
};
export { Context };
