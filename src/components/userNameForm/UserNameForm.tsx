import { FC, useCallback, useState } from "react";
import styled from "styled-components";

interface UserNameFormProps {
  submit: (userName: string) => void
}

const UserNameForm:FC<UserNameFormProps> = ({ submit }) => {
  const [userName, setUserName] = useState<string>('Unnamed');

  const handleChange = useCallback(event => setUserName(event.target.value), [])

  const handleSubmit = useCallback(() => submit(userName), [submit, userName]);

  return(
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="userName">User name</StyledLabel>
      <StyledTextInput name="userName" type="text" value={userName} onChange={handleChange} />

      <StyledFormActions>
        <StyledButton type="submit" >Save</StyledButton>
      </StyledFormActions>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  justify-content: center;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
`;

const StyledTextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #2d3436;
  border-radius: 3px;
  font-size: 16px;
`;

const StyledFormActions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;

const StyledButton = styled.button`
  background-color: #2d3436;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 3px;
  padding: 5px;
  color: #fff;
`;

export default UserNameForm;
