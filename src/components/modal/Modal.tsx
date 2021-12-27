import { FC, ReactElement, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import closeIcon from '../../assets/icons/close.svg';

interface PortalProps {
  children: ReactElement,
}

interface ModalProps {
  //TODO: пропсы булевые обычно называется isVisible, т.е. начинаются с is
  visible: boolean,
  // TODO: если пропс это функция то обычно называются onClose  или closeHandle, мне кажется с on лучше т.к. меньше писать и так же понятно
  close: () => void,
  children: ReactElement,
}

const Portal:FC<PortalProps> = ({ children }) =>
  createPortal(children, document.body);

const Modal:FC<ModalProps> = ({ visible, close, children }) => {
  const handleCloseModal = useCallback(() => {
    close();
  }, []);

  return (
    <Portal>
      <>
        {visible && (
          <Container>
            <Content>
              <CloseButton onClick={handleCloseModal} />
              {children}
            </Content>
          </Container>
        )}
      </>
    </Portal>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  overflow: hidden;
`;

const Content = styled.div`
  width: 30%;
  margin: 20% auto;
  height: fit-content;
  background: #fefefe;
  padding: 30px;
  border-radius: 5px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: url(${closeIcon}) no-repeat center;
  background-size: 15px 15px;
  padding: 10px;
  width: 30px;
  height: 30px;
  z-index: 2;
  border: none;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    opacity: .5;
  }
`;

export default Modal;
