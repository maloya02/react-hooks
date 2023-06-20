import React, { useRef } from 'react';
import Modal from './Modal';
// import "./Modal.css"

// useImperativeHandle(
//   first,
//   () => {
//     second
//   },
//   [third],
// ) Snippet

const AAuseImperativeHandle4 = () => {
    const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal();
  }

  console.log('parent rendered')
  return (
    <div>
        <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  )
}

export default AAuseImperativeHandle4