import React, { FC } from 'react';
import Board from './components/board';
import styled from "styled-components";

//TODO подключи prettier и eslint правила можешь самостоятельно выбрать (но в стажировке говорят airbnb), главное научиться

const App:FC = () => {
  return(
    <Container>
      <Board />
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
`;

export default App;
