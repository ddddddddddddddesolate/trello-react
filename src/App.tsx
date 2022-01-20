import React, { FC } from 'react';

import styled from 'styled-components';

import Board from './components/board';

const App:FC = () => {
  return(
    <StyledContainer>
      <Board />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  font-family: sans-serif;
  position: relative;
`;

export default App;
