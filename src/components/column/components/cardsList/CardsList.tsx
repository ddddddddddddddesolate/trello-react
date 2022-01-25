import { FC } from 'react';

import { CardType } from 'types/cardType';
import styled from 'styled-components';
import Card from './components/card';

interface Props {
  cards: CardType[];
}

const CardsList: FC<Props> = ({ cards }) => (
  <StyledContainer>
    {cards.map((card: CardType) => (
      <Card card={card} />
    ))}
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export default CardsList;
