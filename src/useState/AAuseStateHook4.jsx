import React,{useState} from 'react'

// const [first, setfirst] = useState(second)

const AAuseStateHook4 = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);
  return (
    <div>
        <h1>{count}</h1>
        <button
        onClick={() => {
            setCount(count + 1);
            setShowText(!showText);
        }}
        >
            Click ME
        </button>
        {showText && <p>This is a Text</p>} 
    </div>
  )
}

export default AAuseStateHook4