import React from 'react'
import AAuseReducer from "../useReducer/AAUseReducer"
import AAuseReducer2 from "../useReducer/AAUseReducer2"
import AAuseReducer3 from "../useReducer/AAUseReducer3"


const AAuseReducerComp = () => {
  return (
    <div>
      <br />  <hr />
      <h3>useReducer ex. 1</h3>
      <AAuseReducer/>
      <br />  <hr />
      <h3>useReducer ex. 2</h3>
      <AAuseReducer2/>
      <br />  <hr />
      <h3>useReducer ex. 3</h3>
      <AAuseReducer3/>
    </div>
  )
}

export default AAuseReducerComp