import React, { useContext } from 'react'
import { ThemeContext } from './AAuseContext2'

const FunctionContext = () => {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {

        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
        display: 'inline-block',

    }
    return (
        <>
            <div style={themeStyles}>FunctionContext</div>
            <p>Easy way</p>
        </>

    )
}

export default FunctionContext