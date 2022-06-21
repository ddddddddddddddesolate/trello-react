import React from 'react';

import Header from 'components/Header';
import Board from './components/Board';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Board />
    </div>
  );
};

export default App;
