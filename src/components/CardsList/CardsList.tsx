import { useCallback, useEffect, useMemo, useState } from 'react';

import { CardType } from 'app/types';
import { LocalStorageService } from 'services/storage/LocalStorageService';

import Card from 'components/Card';
import AddCardForm from 'components/AddCardForm';

import styles from './CardsList.module.scss';

interface Props {
  columnId: string;
}

const CardsList = ({ columnId }: Props) => {
  const cardStorageService = useMemo(
    () => new LocalStorageService<CardType>(),
    []
  );

  const [cards, setCards] = useState<CardType[]>([]);

  const setDefaultCards = useCallback(() => {
    const existingCards = cardStorageService.getItems('cards');

    setCards(
      existingCards.filter(
        ({ columnId: existingColumnId }) => existingColumnId === columnId
      )
    );
  }, [cardStorageService, columnId]);

  useEffect(() => setDefaultCards(), [setDefaultCards]);

  return (
    <div className={styles.container}>
      {!!cards && (
        <div className={styles.cards}>
          {cards.map((card) => (
            <Card key={`card-${card.id}`} {...card} />
          ))}
        </div>
      )}

      <AddCardForm columnId={columnId} />
    </div>
  );
};

export default CardsList;
