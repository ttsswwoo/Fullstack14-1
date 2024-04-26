/* eslint-disable no-unused-vars */
import Ball2 from 'assets/imgs/Salin1.png'

import Ownership from "../Ownership"
import Leaderboard from "../Leaderboard"
import Explore from "./Explore";
import "./style.scss"

function LandingPage() {
    return (
        <>
            <Ownership />
            <Leaderboard />
            <div className="logo">
                <h1>Trending Art 🔥</h1>
                <p>Discover more</p>
            </div>
            <div className="cards">
                <div className="card-1">
                    <div className="img">
                    <img src={Ball2} className='ball big' />
                    </div>
                    <p>ExBoot #1</p>
                </div>
                <div className="card-2">
                    <div className="img"></div>
                    <p>ExBoot #2</p>
                </div>
                <div className="card-3">
                    <div className="img"></div>
                    <p>Future of Polygon X</p>
                </div>
                <div className="card-4">
                    <div className="img"></div>
                    <p>Blue Wave #2</p>
                </div>
            </div>
        </>
    );
}

export default LandingPage;