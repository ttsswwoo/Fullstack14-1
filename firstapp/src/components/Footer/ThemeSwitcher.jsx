/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './themeSwitcher.scss'

<<<<<<< HEAD
=======

// eslint-disable-next-line no-unused-vars
>>>>>>> a918671eeda4704df3274ea05e46215e9084f30c
function ThemeSwitcher() {
    const [theme, setTheme] = useState('light')

    function switcher() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    return (
        <div className={theme}>
            <div className="theme-switcher">
                {/* <span className='icon'>☀️</span>

                <div onClick={switcher} className="switcher" >
                    <input type="checkbox" />
                    <span className='circle'></span>
                </div> */}

                {/* <span className='icon'>🌙</span> */}
            </div>
<<<<<<< HEAD

            {/* <div className="container">
                <button onClick={changeCounter} role="dec">Decrement</button>
                <span style={{color:redGreen}}>{counter}</span>
                <button onClick={changeCounter} role="inc">Increment</button>
            </div> */}
=======
>>>>>>> a918671eeda4704df3274ea05e46215e9084f30c
        </div>
    );
}

export default ThemeSwitcher;