import styled from "styled-components";

const RollDice = ({
  currentDice,
  roleDice,
  resetScore,
  showRules,
  setShowRules,
}) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to Roll</p>
      <button className="btn-1" onClick={resetScore}>
        Rest Score
      </button>
      <button className="btn-2" onCLick={() => setShowRules((prev) => !prev)}>
        {showRules ? "Hide" : "Show"}Rules
      </button>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
  .btn-1 {
    width: 220px;
    background-color: whitesmoke;
    border: 1px solid black;
    padding: 10px 18px;
    border-radius: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .btn-2 {
    width: 220px;
    padding: 10px 18px;
    color: whiteSmoke;
    background-color: black;
    border: 1px solid black;
    cursor: pointer;
  }
`;
