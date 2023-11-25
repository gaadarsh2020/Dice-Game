import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/public/images/dices.png" alt="image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;

  .content h1 {
    font-size: 64px;
  }
`;

const Button = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  min-width: 220px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
