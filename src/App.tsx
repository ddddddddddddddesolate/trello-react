import Header from 'components/Header';
import Board from './components/Board';

import styles from './App.module.scss';
import { useSelector } from 'react-redux';
import { RootStateType } from 'app/store';
import Modal from 'components/Modal';
import WelcomeForm from 'components/WelcomeForm';

const currentUserSelector = ({
  currentUserReducer: { currentUser },
}: RootStateType) => currentUser;

const App = () => {
  const currentUser = useSelector(currentUserSelector);

  return (
    <div className={styles.container}>
      <Header />
      <Board />

      <Modal isVisible={!currentUser}>
        <WelcomeForm />
      </Modal>
    </div>
  );
};

export default App;
