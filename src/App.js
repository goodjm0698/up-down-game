import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: linear-gradient(to top, #30cfd0 0%, #a3cca3 50%);
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background: rgba(255, 255, 255, 0.7);
  padding: 50px 20px;
  border-radius: 20px 20px 20px 20px;
  border: 2px solid;
`;

const StatusContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const InputBar = styled.input`
  width: 40%;
  height: 65px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 30px;
  border: 2px solid skyblue;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  border-style: none;
  margin: 10px;

  &:hover {
    background-color: rgb(163, 8, 8);
    color: #fff;
  }
`;

function App() {
  const [status, setStatus] = useState("1~30 까쥐");
  const [rightAnswer, setRightAnswer] = useState(Math.ceil(Math.random() * 30));
  const [answer, setAnswer] = useState(0);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const resetFunc = () => {
    setRightAnswer(Math.ceil(Math.random() * 30));
    setAnswer(0);
    setVisible(!visible);
    setStatus("1~30 까지........");
    setCount(0);
  };

  const ReFunc = () => {
    setVisible(!visible);
    setStatus(`score: ${count} REGAME?`);
  };

  const returnFunc = (event) => {
    event.preventDefault();
    setCount(count + 1);
    if (answer == rightAnswer) {
      setStatus("CORRECT");
      ReFunc();
    } else if (answer > rightAnswer) {
      setStatus("DOWN");
    } else {
      setStatus("UP");
    }
  };

  const changeAnswer = (event) => {
    setAnswer(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Warpper>
      <MainContainer>
        <h1>UP and DOWN game</h1>
        <StatusContainer>
          {status}
          {visible && <Button onClick={resetFunc}>ㄱ</Button>}
        </StatusContainer>
        <div>현재 시도 횟수: {count}</div>
        <Form onSubmit={returnFunc}>
          <InputBar
            type="number"
            max="30"
            min="1"
            value={answer}
            onChange={changeAnswer}
          ></InputBar>
          <Button>확인</Button>
        </Form>
      </MainContainer>
    </Warpper>
  );
}

export default App;
