import React, { useImperativeHandle, useRef } from 'react';
import "./ModalButton.css"

const AAmodalButtons = React.forwardRef(({ isOpen, onClose }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(ref, () => ({
    focusCloseBtn: () => {
      closeRef.current.focus();
    },
    focusConfirmBtn: () => {
      confirmRef.current.focus();
    },
    focusDenyBtn: () => {
      denyRef.current.focus();
    }
  }));

  if (!isOpen) return null;

  return (
    <div className='modal' ref={ref}>
      <button className='close-btn' ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h1>Example No. 3</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button className='confirm-btn' ref={confirmRef} onClick={onClose}>
          Yes
        </button>
        <button className="deny-btn" ref={denyRef} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
});

export default AAmodalButtons;
