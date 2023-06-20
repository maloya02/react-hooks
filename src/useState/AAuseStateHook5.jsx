import React, { useState } from 'react'

// const [first, setfirst] = useState(second)

const AAuseStateHook5 = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  )
}

export default AAuseStateHook5