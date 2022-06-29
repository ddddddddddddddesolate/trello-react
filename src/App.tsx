import React, { useEffect } from 'react';

import Header from 'components/Header';
import Board from './components/Board';

import styles from './App.module.scss';
import { useSelector } from 'react-redux';
import { RootStateType } from 'app/store';

const currentUserSelector = (state: RootStateType) => state.currentUserReducer;

const App = () => {
  const { currentUser } = useSelector(currentUserSelector);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div className={styles.container}>
      <Header />
      <Board />
    </div>
  );
};

export default App;
