import React, { useRef } from 'react'
import Button from "./uIh1Button"

// useImperativeHandle(
//   first,
//   () => {
//     second
//   },
//   [third],
// ) Snippet

const AAuseImperativeHandle = () => {
    const buttonRef = useRef(null);
  return (
    <div>
        <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default AAuseImperativeHandle