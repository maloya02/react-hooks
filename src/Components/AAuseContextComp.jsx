import React from 'react'
import AAuseContext from "../useContext/useContext1/AAuseContext"
import AAuseContext2 from "../useContext/useContext2/AAuseContext2"
import UseContext3 from '../useContext/useContext3/useContext3'
import AAuseContext4 from "../useContext/useContext4/AAUseContext4"
import AAuseContext5 from "../useContext/useContext5/AAuseContext5"
import AAuseContext6 from "../useContext/useContext6/AAuseContext6"
import AAuseContext7 from "../useContext/useContext7/AAuseContext7"

const AAuseContextComp = () => {
  return (
    <div>
      <br />  <hr />
      <h3>useContext ex. 1</h3>
      <AAuseContext/>
      <br />  <hr />
      <h3>useContext ex. 2</h3>
      <AAuseContext2/>
      <br />  <hr />
      <h3>useContext ex. 3</h3>
      <UseContext3/>
      <br />  <hr />
      <h3>useContext ex. 4</h3>
      <AAuseContext4/>
      <br />  <hr />
      <h3>useContext ex. 5</h3>
      <AAuseContext5/>
      <br />  <hr />
      <h3>useContext ex. 6</h3>
      <AAuseContext6/>
      <br />  <hr />
      <h3>useContext ex. 7</h3>
      <AAuseContext7/>
    </div>
  )
}

export default AAuseContextComp