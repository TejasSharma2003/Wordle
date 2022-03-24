import React, { useState ,useContext} from "react";
import {container}  from "./container";
import Letter from "./Letter"
import "../styles/Letter.css"
import {boxContent} from "../Context"
function Board() {
//   const [board, setBoard] = useState(container);
    const {board,setBoard}=useContext(boxContent);
  return (
    <div className="board">
      <div className="row">
        <Letter position={0} attempt={0}/>
        <Letter position={0} attempt={1}/>
        <Letter position={0} attempt={2}/>
        <Letter position={0} attempt={3}/>
        <Letter position={0} attempt={4}/>
      
      </div>
      <div className="row">
        <Letter position={1} attempt={0}/>
        <Letter position={1} attempt={1}/>
        <Letter position={1} attempt={2}/>
        <Letter position={1} attempt={3}/>
        <Letter position={1} attempt={4}/>
      
      </div>
      <div className="row">
        <Letter position={2} attempt={0} />
        <Letter position={2} attempt={1} />
        <Letter position={2} attempt={2} />
        <Letter position={2} attempt={3} />
        <Letter position={2} attempt={4} />
        
      </div>
      <div className="row">
        <Letter position={3} attempt={0}/>
        <Letter position={3} attempt={1}/>
        <Letter position={3} attempt={2}/>
        <Letter position={3} attempt={3}/>
        <Letter position={3} attempt={4}/>
      
      </div>
      <div className="row">
        <Letter position={4} attempt={0}/>
        <Letter position={4} attempt={1}/>
        <Letter position={4} attempt={2}/>
        <Letter position={4} attempt={3}/>
        <Letter position={4} attempt={4}/>
      
      </div>
      <div className="row">
        <Letter position={5} attempt={0}/>
        <Letter position={5} attempt={1}/>
        <Letter position={5} attempt={2}/>
        <Letter position={5} attempt={3}/>
        <Letter position={5} attempt={4}/>
      
      </div>
    </div>
  );
}

export default Board;
