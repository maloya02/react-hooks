import React, { useState } from 'react'

// const [first, setfirst] = useState(second)

const AAuseStateHook2 = () => {
    const [inputValue, setInputValue] = useState("Text Input");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }
  return (
    <div>
        <input placeholder='input text here' onChange={onChange} />
        {inputValue}
    </div>
  )
}

export default AAuseStateHook2