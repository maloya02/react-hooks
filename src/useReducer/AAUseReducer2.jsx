import React, { useReducer } from 'react'

// const [state, dispatch] = useReducer(first, second, third) 
// snippet

const reducer = (state, action) =>  {
    switch (action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            return state        
    }
}

const AAUseReducer2 = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    const increment = () => {
        dispatch({type: "increment"})
    }

    const decrement = () => {
        dispatch({type: "decrement"})
    }
  return (
    <div>
      <button onClick={decrement}>-</button>
      {state.count}
      <button onClick={increment}>+</button>
    </div>
  )
}

export default AAUseReducer2