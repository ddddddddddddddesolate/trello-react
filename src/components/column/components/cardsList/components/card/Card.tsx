import { FC } from 'react';
import styled from 'styled-components';
import { CardType } from 'types/cardType';

interface Props {
  card: CardType;
}

const Card: FC<Props> = ({ card: { name } }) => {
  return <StyledContainer>{name}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 250px;
  padding: 10px;

  border-radius: 2px;

  background-color: rgba(255, 255, 255, 0.5);
`;

export default Card;
