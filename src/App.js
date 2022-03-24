import Board from "./components/Board";
import "./App.css"
import "./styles/Board.css"
import Keyboard from "./components/Keyboard"
import {Context} from "./Context";
import "./styles/Keyboard.css"
import Welcome from "./components/Welcome.js"
import "./styles/Welcome.css"
import Won from "./components/Won"
import "./styles/Won.css"
function App() {
  return (
    <div className="App">
      <Context>
        <Won/>
        <Welcome/>
        <Board/>
        <Keyboard/>
      </Context>
    </div>
  );
}

export default App;
