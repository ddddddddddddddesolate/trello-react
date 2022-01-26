import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import closeIcon from 'assets/icons/close.svg';

interface PortalProps {
  children: ReactElement;
}

interface ModalProps {
  isVisible: boolean;
  closable: boolean;
  onClose: () => void;
  children: ReactElement;
}

const Portal: FC<PortalProps> = ({ children }) =>
  createPortal(children, document.body);

const Modal: FC<ModalProps> = ({ isVisible, closable, onClose, children }) => (
  <Portal>
    <>
      {isVisible && (
        <StyledContainer>
          <StyledContent>
            {closable && <StyledCloseButton onClick={onClose} />}

            {children}
          </StyledContent>
        </StyledContainer>
      )}
    </>
  </Portal>
);

const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const StyledContent = styled.div`
  width: 30%;
  margin: 20% auto;
  height: fit-content;
  background: #fefefe;
  padding: 30px;
  border-radius: 5px;
  position: relative;
`;

const StyledCloseButton = styled.button`
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
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export default Modal;
