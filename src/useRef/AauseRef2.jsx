import React, { useEffect, useRef, useState } from 'react'

// const first = useRef(second) snippet

const AauseRef2 = () => {

    const [name, setName] = useState("Aa Dasalla")
    const renderCount = useRef(1)
    const inputRef = useRef()

    useEffect(() => {
        renderCount.current = renderCount.current + 1

    },[])

    const focusBtn = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
            <div>My Name is :{name}</div>
            <div>This Rendered {renderCount.current} times</div>
            <button onClick={focusBtn}>Click to Focus</button>
        </>

    )
}

export default AauseRef2