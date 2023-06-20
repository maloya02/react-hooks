import React, { useRef, useState } from 'react'
import CustomRef from './CustomRef'

// const first = useRef(second) snippet

const AAuseRef4 = () => {
  
    const [value, setValue] = useState("red")
    const inputRef = useRef()

  return (
    <div>
        <CustomRef
        ref={inputRef}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <br />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default AAuseRef4