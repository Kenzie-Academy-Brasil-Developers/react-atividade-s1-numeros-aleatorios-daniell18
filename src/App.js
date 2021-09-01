import "./App.css";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100 + 1));
  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100 + 1));
  }
  return (
    <div className="App">
      <div className="text">Numero Aleatorio </div>
      <div className="numero">{number}</div>
      <button className="button" onClick={randomNumber}>
        Gerar Numbero Aleatorio
      </button>
    </div>
  );
}

export default App;
