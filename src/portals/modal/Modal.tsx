import React, { ReactNode, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState<boolean>(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const closeModal = (): void => {
    setShowModal(false);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  return showModal
    ? ReactDOM.createPortal(
      <>
        <div
          className="modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(6, 24, 39, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            backdropFilter: "blur(4px)"
          }}
          onClick={handleOverlayClick}
          ref={modalRef}
        >
          <div onClick={(e) => { e.stopPropagation() }} style={{ zIndex: 10000 }}>
            {children}
          </div>
        </div >
      </>,
      document.body
    )
    : null;
};

export default Modal;