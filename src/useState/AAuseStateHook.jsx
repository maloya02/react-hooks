import React, { useState } from 'react'

// const [first, setfirst] = useState(second)

const AAuseStateHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default AAuseStateHook