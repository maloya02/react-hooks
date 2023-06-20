import React, { useEffect, useRef, useState } from 'react'

// const first = useRef(second) snippet
const AauseRef3 = () => {

    const [name, setName] = useState("Aa Dasalla")
    const prevName = useRef()

    useEffect(() => {
        prevName.current = name

    },[name])


    return (
        <>
            <input  type="text" value={name} onChange={e => setName(e.target.value)} />
            <div>My Name is :{name} and is used to be {prevName.current}</div>
            
        </>

    )
}

export default AauseRef3