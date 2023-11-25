import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
`;

function App() {
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameIsStarted((prev) => !prev);
  };

  return (
    <>{gameIsStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
