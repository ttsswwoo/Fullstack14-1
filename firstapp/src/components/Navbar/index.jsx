// npm run dev

// 1. Revert all changes => Отмена всех изменений
// 2. git pull  =>  Загрузка изменений с удаленного репозитория

import './style.scss'
import Logo from "../common/Logo"
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <nav>
                <div className="left-nav">
                    <Link to ='/'></Link>
                    <a href="#logo">
                        <Logo />
                    </a>

                    <div className="search-input">
                        <div className="left">🔍</div>
                        <div className="right">
                            <input type="search" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="right-nav">
                    <a href="#explore">Explore</a>
                    <a href="#trending">Trending🔥</a>
                    <a href="#FAQ">FAQ</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;