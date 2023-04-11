import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalBox } from './Modal.styled';

export const Modal = ({ url, onClose }) => {
  useEffect(() => {
    const handleKeyClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyClose);
    return () => {
      window.removeEventListener('keydown', handleKeyClose);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay className="overlay" onClick={handleClose}>
      <ModalBox className="modal">
        <img src={url} alt="title" style={{ objectFit: 'cover' }} />
      </ModalBox>
    </Overlay>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
