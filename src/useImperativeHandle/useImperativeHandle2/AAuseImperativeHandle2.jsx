import React, { useRef, useState } from 'react'
import Customise from './Customise'

// useImperativeHandle(
//   first,
//   () => {
//     second
//   },
//   [third],
// ) Snippet

const AAuseImperativeHandle2 = () => {
    const [value, setValue] = useState("red")
    const inputRef = useRef()
  return (
    <div>
        <Customise
        ref={inputRef}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <br />
        <button onClick={() => inputRef.current.alertHello()}>Focus</button>
    </div>
  )
}

export default AAuseImperativeHandle2