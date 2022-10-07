import Column from 'components/Column';

import styles from './Board.module.scss';
import { useSelector } from 'react-redux';
import { RootStateType } from 'app/store';

const columnsSelector = (state: RootStateType) => state.columnsReducer;

const Board = () => {
  const { columns } = useSelector(columnsSelector);

  return (
    <div className={styles.container}>
      {columns.map((column) => (
        <Column key={`column-${column.id}`} {...column} />
      ))}
    </div>
  );
};

export default Board;
