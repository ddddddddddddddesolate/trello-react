import { FC } from 'react';
import styled from 'styled-components';

const Header:FC = () => {
  return(
    <>
      <Container>
        <Title>Trello React</Title>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: rgba(255, 255, 255, .2);
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
`;

const Title = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin: auto 20px;
`;

export default Header;
