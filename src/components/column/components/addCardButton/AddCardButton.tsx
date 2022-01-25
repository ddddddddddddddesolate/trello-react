import { FC, useCallback } from 'react';

import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

const AddCardButton: FC<Props> = ({ onClick }) => {
  const handleClick = useCallback(() => onClick(), [onClick]);

  return <StyledButton onClick={handleClick}>Add card</StyledButton>;
};

const StyledButton = styled.button`
  width: 270px;
  height: 40px;
  padding: 10px;

  font-size: 18px;

  border-radius: 2px;
  border: none;

  background-color: rgba(0, 0, 0, 0.05);

  transition: 0.2s;

  caret-color: rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;

    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export default AddCardButton;
