import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(false);
  const [currentDice, setCurrentDice] = useState(2);
  const [error, setError] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("you have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_Section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        roleDice={roleDice}
        resetScore={resetScore}
      />
      {showRules && <Rules showRules={showRules} setShowRules={setShowRules} />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 40px 0px;

  .top_Section {
    display: flex;
    justify-content: space-around;
    margin: 1rem 0rem;
  }
`;
