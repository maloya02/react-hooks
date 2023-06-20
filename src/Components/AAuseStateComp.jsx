import React from 'react'
import AAuseStateHook from '../useState/AAuseStateHook'
import AAuseStateHook2 from '../useState/AAuseStateHook2'
import AAuseStateHook3 from '../useState/AAuseStateHook3'
import AAuseStateHook4 from '../useState/AAuseStateHook4'
import AAuseStateHook5 from '../useState/AAuseStateHook5'

const AAuseStateComp = () => {
  return (
    <div>
        <h3>useStateHook ex. 1</h3>
      <AAuseStateHook />
      <br />  <hr />
      <h3>useStateHook ex. 2</h3>
      <AAuseStateHook2 />
      <br />  <hr />
      <h3>useStateHook ex. 3</h3>
      <AAuseStateHook3 />
      <br />  <hr />
      <h3>useStateHook ex. 4</h3>
      <AAuseStateHook4 />
      <br />  <hr />
      <h3>useStateHook ex. 5</h3>
      <AAuseStateHook5 />
    </div>
  )
}

export default AAuseStateComp