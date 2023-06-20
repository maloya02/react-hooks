import React, { useState } from 'react'
import ClassContext from './ClassContext'
import FunctionContext from './FunctionContext'

// const first = useContext(second) snippet

export const ThemeContext = React.createContext()

const AAuseContext2 = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarktheme => !prevDarktheme)
    }
    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContext />
                <ClassContext />
            </ThemeContext.Provider>
        </div>
    )
}

export default AAuseContext2