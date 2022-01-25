import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

interface Props {
  onSubmit: (cardName: string) => void;
}

const AddCardForm: FC<Props> = ({ onSubmit }) => {
  const [cardName, setCardName] = useState<string>('');

  const handleChange = useCallback(
    (e) => setCardName(e.currentTarget.value),
    []
  );

  const handleSubmit = useCallback(() => onSubmit(cardName), [cardName]);

  return (
    <form onSubmit={handleSubmit}>
      <StyledTextInput
        type="text"
        placeholder="Card name..."
        onChange={handleChange}
      />
    </form>
  );
};
const StyledTextInput = styled.input`
  width: 250px;
  padding: 10px;

  border: none;
  border-radius: 2px;

  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export default AddCardForm;
