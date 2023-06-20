import React, { useEffect, useState } from 'react'

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third]) snippet


const AAuseEffect3 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)  // clean up
        }

    },[])

  return (
    <div>
        <div>
        <h3>{windowWidth}px</h3>
        </div>
        <div>
        <h3>{windowHeight}px</h3>
        </div>
    </div>
    
  )
}

export default AAuseEffect3