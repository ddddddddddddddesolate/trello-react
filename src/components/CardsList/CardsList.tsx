import Card from 'components/Card';
import AddCardForm from 'components/AddCardForm';

import styles from './CardsList.module.scss';
import { useSelector } from 'react-redux';
import { RootStateType } from 'app/store';

interface Props {
  columnId: string;
}

const cardsSelector =
  (columnId: string) =>
  ({ cardsReducer: { cards } }: RootStateType) =>
    cards.filter((card) => card.columnId === columnId);

const CardsList = ({ columnId }: Props) => {
  const cards = useSelector(cardsSelector(columnId));

  return (
    <div className={styles.container}>
      {cards.length > 0 ? (
        <div className={styles.cards}>
          {cards.map((card) => (
            <Card key={`card-${card.id}`} {...card} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>no cards</div>
      )}

      <AddCardForm columnId={columnId} />
    </div>
  );
};

export default CardsList;
