import React from 'react'

const CustomRef = ({style, ...props}, ref) => {
  return (
    <input  
    ref={ref}
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

export default React.forwardRef(CustomRef)