import { FC, ReactElement, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

// TODO: implement styles for modal
// import styles from './Modal.module.scss';

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

const Modal: FC<ModalProps> = ({ isVisible, closable, onClose, children }) => {
  const handleEscapePress = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);

  useEffect(() => {
    if (closable) {
      window.addEventListener('keydown', handleEscapePress);
    }
  }, []);

  return (
    <Portal>
      <>
        {isVisible && (
          <div>
            <div>
              {closable && <button onClick={onClose} />}

              {children}
            </div>
          </div>
        )}
      </>
    </Portal>
  );
};

export default Modal;
