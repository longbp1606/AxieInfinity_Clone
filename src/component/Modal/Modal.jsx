import React from 'react'
import { Overlay, ModalContent, CloseButton } from './Modal.styled';

const Modal = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open
  
    return (
      <Overlay>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <iframe
            width="100%"
            height="315"
            src={videoSrc}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ModalContent>
      </Overlay>
    );
  };

export default Modal;