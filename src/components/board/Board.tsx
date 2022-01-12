import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../header';
import Column from '../column';
import localStorageService from '../../services/storage';
import { initColumns } from './mock';
import Modal from '../modal';
import UserNameForm from '../userNameForm';


const Board:FC = () => {
  // TODO: про any мы уже разговаривали, оставлю чтобы не забыл
  const [columns, setColumns] = useState<any []>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const getUserName = () => localStorageService.getItem('userName');

  const setUserName = (userName: string) => localStorageService.setItem('userName', userName);

  const getDefaultColumns = () => {
    const defaultColumns = localStorageService.getItem('columns');

    if (!defaultColumns) {
      localStorageService.setItem('columns', initColumns);
      setColumns(initColumns);

      return;
    }

    setColumns(defaultColumns);
  };

  const handleModalClose = useCallback(() => setModalVisible(false), []);

  const handleUserNameFormSubmit = useCallback((userName: string) => setUserName(userName), []);

  useEffect(() => {
    getDefaultColumns();

    const username = getUserName();

    if (!username) {
      setModalVisible(true);
    }
  }, []);

  return(
    <>
      <Header />
      <ColumnsContainer>
        {/*TODO: key чисто служебный пропс, можешь не запариваться добавляя "column-"*/}
        {columns.map(column => <Column key={`column-${column.id}`} {...column} />)}
      </ColumnsContainer>


      <Modal isVisible={modalVisible} closable={false} onClose={handleModalClose}>
        <UserNameForm submit={handleUserNameFormSubmit} />
      </Modal>
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
