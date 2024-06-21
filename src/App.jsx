import React, { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card/Card";
const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
import bart from "./assets/Bart.jpg";

function App() {
  const [nameCharacter, setNameCharacter] = useState("Bart");
  const [imgCharacter, setImgCharacter] = useState(bart);
  const [quoteCharacter, setQuoteCharacter] = useState("¡Ay caramba!");

  const handleGetApi = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setNameCharacter(data[0].character);
      setQuoteCharacter(data[0].quote);
      setImgCharacter(data[0].image);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <Card
        nameCharacter={nameCharacter}
        imgCharacter={imgCharacter}
        quoteCharacter={quoteCharacter}
      />
      <button onClick={handleGetApi} className="button-generating">
        Generar Personaje
      </button>
    </div>
  );
}

export default App;
