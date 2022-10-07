import { CardType } from 'app/types';

import styles from './Card.module.scss';
import Modal from 'components/Modal';
import CardForm from 'components/CardForm';
import { useCallback, useState } from 'react';
import CommentsList from 'components/CommentsList';

interface Props extends CardType {}

const Card = (card: Props) => {
  const [cardModalIsVisible, setCardModalIsVisible] = useState<boolean>(false);

  const handleOpenCardModal = useCallback(() => {
    setCardModalIsVisible(true);
  }, []);

  const handleCloseCardModal = useCallback(() => {
    setCardModalIsVisible(false);
  }, []);

  return (
    <>
      <div className={styles.name} onClick={handleOpenCardModal}>
        {card.name}
      </div>

      <Modal isVisible={cardModalIsVisible} onClose={handleCloseCardModal}>
        <div className={styles.modal}>
          <CardForm {...card} />

          <CommentsList cardId={card.id} />
        </div>
      </Modal>
    </>
  );
};

export default Card;
