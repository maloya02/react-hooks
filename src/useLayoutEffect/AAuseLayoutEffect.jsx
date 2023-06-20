import React, { useEffect, useLayoutEffect,useRef } from 'react'

// useLayoutEffect(() => {
//   first

//   return () => {
//     second
//   };
// }, [third]) snippet

const AAuseLayoutEffect = () => {

  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
    return () => {
      console.log('Cleanup: useLayoutEffect');
    };

  },[])

  useEffect(() => {
    inputRef.current.value = "HELLO";
    console.log("useEffect");
    return () => {
      console.log('Cleanup: useEffect');
    }
  },[])

  return (
    <div>
      <input type="text" ref={inputRef} value={"Aa Dasalla"} style={{ width: 400, height: 60 }} />
    </div>
  )
}

export default AAuseLayoutEffect