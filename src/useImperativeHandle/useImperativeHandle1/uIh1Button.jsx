import React, { forwardRef, useImperativeHandle, useState } from 'react'

// useImperativeHandle(
//   first,
//   () => {
//     second
//   },
//   [third],
// )

const uIh1Button = forwardRef((props,ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
          setToggle(!toggle);
        },
      }));

  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  )
})

export default uIh1Button