import React, { useImperativeHandle } from 'react'

const Customise = ({style, ...props}, ref) => {
    useImperativeHandle(ref,() => {
        return{alertHello: () => alert("Hello")}
    },[])

  return (
    <input  
    // ref={ref} by using useImperativeHandle this ref is uneccesary
    {...props}
    style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25rem",
        borderBottom: ".1em solid black",
        borderTopLeftRadius: ".25em",
        borderTopRightRadius: ".25em",
        ...style,
    }}
    />
  )
}

export default React.forwardRef(Customise)