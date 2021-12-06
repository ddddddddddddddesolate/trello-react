import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../header';
import Column from '../column';
import localStorageService from '../../services/storage';
import { initColumns } from './mock';


const Board:FC = () => {
  const [columns, setColumns] = useState<any []>([]);

  const getDefaultColumns = () => {
    const defaultColumns = localStorageService.getItem('columns');

    if (!defaultColumns) {
      localStorageService.setItem('columns', initColumns);
      setColumns(initColumns);

      return;
    }

    setColumns(defaultColumns);
  };

  useEffect(() => {
    getDefaultColumns();
  }, []);

  return(
    <>
      <Header />
      <ColumnsContainer>
        {columns.map(({ id, name }) => (
          <Column id={id} name={name} />
        ))}
      </ColumnsContainer>
    </>
  );
};

const ColumnsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #2f3640;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 60px;
`;

export default Board;
