import React, { useRef, useState } from 'react'
import AAmodalButtons from './AAmodalButtons'

// useImperativeHandle(
//   first,
//   () => {
//     second
//   },
//   [third],
// ) Snippet

const AAuseImperativeHandle3 = () => {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()

  return (
    <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <button onClick={() => modalRef.current.focusCloseBtn()}>Focus Close</button>
        <button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
        <button onClick={() => modalRef.current.focusDenyBtn()}>Focus Deny</button>
        <AAmodalButtons
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
        />
    </div>
  )
}

export default AAuseImperativeHandle3