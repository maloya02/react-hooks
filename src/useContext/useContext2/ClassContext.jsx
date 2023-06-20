import React, { Component } from 'react'
import { ThemeContext } from './AAuseContext2'


class ClassContext extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? "#333" : "#CCC",
            color: dark ? "#CCC" : "#333",
            padding: "2rem",
            margin: "2rem",
            display: 'inline-block',
        }
    }
    render() {
        return (
            <>
                <ThemeContext.Consumer>
                    {darktheme => {
                        return <div style={this.themeStyles(darktheme)}>
                            Class Theme

                        </div>
                    }}

                </ThemeContext.Consumer>
                <p>Hard way</p>
            </>

        )
    }
}

export default ClassContext;

