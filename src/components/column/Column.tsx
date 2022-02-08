import { FC, useCallback, useEffect, useState } from 'react';

import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import localStorageService from 'services/storage';

import ColumnNameForm from 'components/columnNameForm';
import AddCardButton from 'components/addCardButton';
import CardsList from 'components/cardsList';

import { CardType } from 'types/cardType';
import AddCardForm from 'components/addCardForm';

interface ColumnProps {
  id: string;
  name: string;
}

const Column: FC<ColumnProps> = ({ id, name }) => {
  const [createCardFormVisible, setCreateCardFormVisible] =
    useState<boolean>(false);
  const [cards, setCards] = useState<CardType[]>([]);

  const getCards = useCallback((): CardType[] => {
    const allCards = localStorageService.getItem('cards') || [];

    return allCards.filter((card: CardType) => card.columnId === id);
  }, [id]);

  const handleOpenCreateCardForm = useCallback(
    (): void => setCreateCardFormVisible(true),
    []
  );

  const handleCloseCreateCardForm = useCallback(
    (): void => setCreateCardFormVisible(false),
    []
  );

  const handleCreateCard = useCallback(
    (name: string): void => {
      let cards = localStorageService.getItem('cards') || [];

      cards.unshift({
        id: uuid(),
        columnId: id,
        name: name,
      });

      localStorageService.setItem('cards', cards);

      setCards(getCards());
      setCreateCardFormVisible(false);
    },
    [getCards, id]
  );

  useEffect(() => setCards(getCards()), [getCards]);

  return (
    <StyledContainer>
      <ColumnNameForm id={id} name={name} />

      <StyledCardsContainer>
        {cards.length !== 0 ? (
          <CardsList cards={cards} />
        ) : (
          <StyledEmpty>No cards found</StyledEmpty>
        )}

        {createCardFormVisible && (
          <AddCardForm
            onSubmit={handleCreateCard}
            onBlur={handleCloseCreateCardForm}
          />
        )}

        <AddCardButton onClick={handleOpenCreateCardForm} />
      </StyledCardsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: #dcdde1;

  border-radius: 4px;
  width: 280px;
  height: fit-content;
  margin-left: 12px;
  padding: 10px;
`;

const StyledCardsContainer = styled.div`
  height: fit-content;
  width: 270px;
  padding: 5px;

  border-radius: 3px;

  font-size: 18px;
  line-height: 18px;

  background-color: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  gap: 10px;
`;

const StyledEmpty = styled.div`
  width: 100%;
  padding: 10px 0;

  text-align: center;
`;

export default Column;
