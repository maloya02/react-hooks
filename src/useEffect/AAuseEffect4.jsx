import React, { useEffect, useState } from 'react'

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third]) snippet

const AAuseEffect4 = () => {
    const [resourceType,setResourceType] = useState('posts')

    useEffect(() => {
        console.log('resource changed')

        return () => {
            console.log('return from resource change'); // clean up
        }
    },[resourceType])

  return (
    <>
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
    
  )
}

export default AAuseEffect4