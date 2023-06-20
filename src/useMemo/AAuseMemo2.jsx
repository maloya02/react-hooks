import React, { useState, useMemo } from 'react'



const AAuseMemo2 = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number])
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'dark'
    }

  return (
    <>
    <div style={{display: 'inline-block'}}>
        <input type="number" value={number} onChange={(e) => {
            setNumber(parseInt(e.target.value))
        } } />
        <button onClick={() => setDark(prevDark => !prevDark)}>
            Dark/Light Theme
            </button>
            <div className='Memo2' style={themeStyles}>{doubleNumber}</div>
    </div>
    </>
    
  )
}

function slowFunction(num){
    console.log('Calling Slow Function');
    for (let i = 0; i <= 1000000000; i++){}
    return num * 2
}

export default AAuseMemo2