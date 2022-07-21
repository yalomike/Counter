import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="container-principal">
        <Counter numClicks={numClicks} />
        <Button text="Click" isClickButton={true} manageClick={manageClick} />
        <Button text="Reset" isClickButton={false} manageClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
