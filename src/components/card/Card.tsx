import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { CardType } from 'types/cardType';
import Modal from 'components/modal';
import CardForm from 'components/cardForm';

interface Props {
  card: CardType;
}

const Card: FC<Props> = ({ card }) => {
  const [cardModalVisible, setCardModalVisible] = useState<boolean>(false);

  const handleOpenCardModal = useCallback(() => setCardModalVisible(true), []);

  const handleCloseCardModal = useCallback(
    () => setCardModalVisible(false),
    []
  );

  return (
    <>
      <StyledContainer onClick={handleOpenCardModal}>
        {card.name}
      </StyledContainer>

      <Modal
        isVisible={cardModalVisible}
        closable={true}
        onClose={handleCloseCardModal}
      >
        <CardForm card={card} />
      </Modal>
    </>
  );
};

const StyledContainer = styled.div`
  width: 250px;
  padding: 10px;

  border-radius: 2px;

  background-color: rgba(255, 255, 255, 0.5);

  transition: all 0.2s;

  box-shadow: 0 2px rgba(0, 0, 0, 0.3);

  word-wrap: break-word;

  &:hover {
    cursor: pointer;

    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default Card;
