import { FC } from 'react';

import styled from 'styled-components';

import ColumnNameForm from './components/columnNameForm';

interface ColumnProps {
  id: number,
  name: string,
}

const Column:FC<ColumnProps> = ({ id, name }) => {
  return(
    <StyledContainer>
      <ColumnNameForm id={id} name={name} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: #dcdde1;
  border-radius: 4px;
  width: 280px;
  height: fit-content;
  margin-left: 12px;
  padding: 10px;
`;

export default Column;
