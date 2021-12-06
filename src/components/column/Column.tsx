import { FC } from 'react';
import styled from "styled-components";

interface ColumnProps {
  id: number,
  name: string,
}

const Column:FC<ColumnProps> = ({ id, name }) => {
  return(
    <Container>
      <ColumnName>{ name }</ColumnName>
    </Container>
  );
};

const Container = styled.div`
  background-color: #dcdde1;
  border-radius: 4px;
  width: 280px;
  height: fit-content;
  margin-left: 12px;
  padding: 10px;
`;

const ColumnName = styled.div`
  color: #2d3436;
  font-weight: bold;
  padding: 6px 6px 12px;
`;

export default Column;
