import React from 'react'
import AAuseMemo from '../useMemo/AAuseMemo'
import AAuseMemo2 from '../useMemo/AAuseMemo2'
import AAuseMemo3 from '../useMemo/AAuseMemo3'

const AAuseMemoComp = () => {
  return (
    <div>
        <br />  <hr />
      <h3>useMemo ex. 1</h3>
      <AAuseMemo/>
      <br />  <hr />
      <h3>useMemo ex. 2</h3>
      <AAuseMemo2/>
      <br />  <hr />
      <h3>useMemo ex. 3</h3>
      <AAuseMemo3/>
    </div>
  )
}

export default AAuseMemoComp