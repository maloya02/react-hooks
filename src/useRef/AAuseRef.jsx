import React, { useRef } from 'react'

// const first = useRef(second) snippet

const AAuseRef = () => {

    const inputRef = useRef(null)

    const onClick = () => {
        inputRef.current.focus();
        inputRef.current.value="";
    }
    
  return (
    <div>
        <h1>Aa Dasalla</h1>
        <input type="text" placeholder='name here' ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default AAuseRef