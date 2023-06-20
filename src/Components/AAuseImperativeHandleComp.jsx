import React from 'react'
import AAuseImperativeHandle from "../useImperativeHandle/useImperativeHandle1/AAuseImperativeHandle"
import AAuseImperativeHandle2 from "../useImperativeHandle/useImperativeHandle2/AAuseImperativeHandle2"
import AAuseImperativeHandle3 from "../useImperativeHandle/useImperativeHandle3/AAuseImperativeHandle3"
import AAuseImperativeHandle4 from "../useImperativeHandle/useImperativeHandle4/AAuseImperativeHandle4"

const AAuseImperativeHandleComp = () => {
  return (
    <div>
      <br />  <hr />
      <h3>useImperativeHandle ex. 1</h3>
      <AAuseImperativeHandle/>
      <br />  <hr />
      <h3>useImperativeHandle ex. 2</h3>
      <AAuseImperativeHandle2/>
      <br />  <hr />
      <h3>useImperativeHandle ex. 3</h3>
      <AAuseImperativeHandle3/>
      <br />  <hr />
      <h3>useImperativeHandle ex. 4</h3>
      <AAuseImperativeHandle4/>
    </div>
  )
}

export default AAuseImperativeHandleComp