/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import './themeSwitcher.scss'

function ThemeSwitcher() {
    const { theme, setTheme } = useState('light')
    const { counter, setCounter } = useState()

    function switcher(e) {
        // e.preventDefault()

        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    function changeCountere(e) {
        
    }

    return (
        <div className={theme}>
            <div className={"theme-switcher"}>
                <span className="icon">🌕</span>

                <div className="switcher" onClick={switcher}>
                    <input type="checkbox" />
                    <span className="circle"></span>
                </div>

                <span className="icon">🌙</span>
            </div>

            <div className="container">
                <button onClick={changeCounter} role="dec">Decrement</button>
                <span>{counter}</span>
                <button onClick={changeCounter} role="inc">Increment</button>
            </div>
        </div>
    );
}

export default ThemeSwitcher;