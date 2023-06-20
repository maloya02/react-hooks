import React, { useEffect, useLayoutEffect, useState } from 'react'

// useLayoutEffect(() => {
//   first

//   return () => {
//     second
//   };
// }, [third]) snippet

const AAuseLayoutEffect2 = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(3)

    useEffect(() => {
        console.log(count);
        return () => {
            console.log("cancel useLayoutEffect");
        }
        
    },[count])

    useLayoutEffect(() => {
        console.log(count2);
        return () => {
            console.log("cancel useLayoutEffect");
        }
       
    },[count2])

  return (
    <>
    <button onClick={() => setCount(c => c +1)}>Increment</button>
    <div>{count}</div>
    <button onClick={() => setCount2(c => c +3)}>Increment</button>
    <div>{count2}</div>
    </>
    
  )
}

export default AAuseLayoutEffect2