import { CardType } from 'types/cardType';
import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import localStorageService from 'services/storage';

interface Props {
  card: CardType;
}

const CardForm: FC<Props> = ({ card: { id, name } }) => {
  const [cardName, setCardName] = useState<string>(name);

  const handleChangeName = useCallback(
    (e) => setCardName(e.currentTarget.value),
    [cardName]
  );

  const handleSubmitName = useCallback(
    (e) => {
      e.preventDefault();

      const previousCards = localStorageService.getItem('cards');

      const updatedCards = previousCards.map((card: CardType) => {
        if (card.id === id) {
          card.name = cardName;
        }

        return card;
      });

      localStorageService.setItem('cards', updatedCards);
    },
    [cardName]
  );

  useEffect(() => console.log(cardName), [cardName]);

  return (
    <StyledForm onSubmit={handleSubmitName}>
      <input onChange={handleChangeName} value={cardName} type="text" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export default CardForm;
