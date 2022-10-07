import { FC, ReactElement, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from 'assets/icons/close.svg';

// TODO: implement styles for modal
import styles from './Modal.module.scss';

interface PortalProps {
  children: ReactElement;
}

interface ModalProps {
  isVisible: boolean;
  onClose?: () => void;
  children: ReactElement;
}

const Portal: FC<PortalProps> = ({ children }) =>
  createPortal(children, document.body);

const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const handleEscapePress = useCallback(
    (event) => {
      if (onClose && event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (onClose) {
      window.addEventListener('keydown', handleEscapePress);
    }
  }, [onClose, handleEscapePress]);

  return (
    <Portal>
      <>
        {isVisible && (
          <div className={styles.overlay}>
            <div
              className={onClose ? styles.closableContainer : styles.container}
            >
              {onClose && (
                <img
                  src={CloseIcon}
                  className={styles.close}
                  onClick={onClose}
                  alt="Close"
                />
              )}

              <div className={styles.content}>{children}</div>
            </div>
          </div>
        )}
      </>
    </Portal>
  );
};

export default Modal;
