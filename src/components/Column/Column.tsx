import ColumnForm from 'components/ColumnForm';

import styles from './Column.module.scss';
import CardsList from 'components/CardsList';

interface Props {
  id: string;
  name: string;
}

const Column = ({ id, name }: Props) => {
  return (
    <div className={styles.container}>
      <ColumnForm id={id} name={name} />

      <CardsList columnId={id} />
    </div>
  );
};

export default Column;
