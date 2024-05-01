<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import Ownership from "./Ownership"
import Leaderboard from "./Leaderboard"
import './style.scss'

function Collections() {
    return (
        <>
            <Ownership />
            <Leaderboard />
            <div className="container">
                <h1>Featured Collections</h1>
            </div>
            <div className="cards">
                <div className="right">
                    <h2>ExBoot #1</h2>
                    <p>Description</p>
                    <p>We would like to present you The Exboot 3D - Watching you~</p>
                    <div>
                        <p>Current Bid</p>
                        <p>Current Bid</p>
                    </div>
                </div>
                <div className="left">

                </div>
            </div>
            <div className="cards">
                <div className="right">
                    <h2>ExBoot #1</h2>
                    <p>Description</p>
                    <p>We would like to present you The Exboot 3D - Watching you~</p>
                    <div>
                        <p>Current Bid</p>
                        <p>Current Bid</p>
                    </div>
                </div>
                <div className="left">

                </div>
            </div>
        </>
=======
import Card1 from "../../../assets/imgs/collections/Salin2.png"
import Card2 from "../../../assets/imgs/collections/Salin1.png"
import PerPic1 from "../../../assets/imgs/collections/imo1.png"
import Galochka from "../../../assets/icons/trendingart/galochka.png"
import Eth from "../../../assets/icons/trendingart/crypto-sign.png"

import "./style.scss"

function Collections() {
    return (
        <section className="collections">
            <h1>Featured Collections</h1>

            <div className="cards">
                <div className="card1">
                    <div>
                        <img src={Card1} />
                    </div>
                    <div>
                        <img src={PerPic1} />
                        <img className="galochka" src={Galochka} />
                        <h3>Perperzon</h3>
                        <h2>ExBoot #1</h2>
                        <small className="desc">Description</small>
                        <p>We would like to present you The Exboot 3D - Watching you~</p>
                        <div className="bottom-part">
                            <div>
                                <small>Current Bid</small>
                                <img src={Eth} />
                                <p>3.421</p>
                            </div>
                            <div>
                                <small>End in</small>
                                <p>1h 12m 14s</p>
                            </div>
                        </div>
                        <button className="red-btn">
                            <span>💳</span>
                            Place Bid
                        </button>
                    </div>
                </div>
                <div className="card2">
                    <div>
                        <img src={Card2} />
                    </div>
                    <div>
                        <img src={PerPic1} />
                        <img className="galochka" src={Galochka} />
                        <h3>Perperzon</h3>
                        <h2>ExBoot #1</h2>
                        <small className="desc">Description</small>
                        <p>We would like to present you The Exboot 3D - Watching you~</p>
                        <div className="bottom-part">
                            <div>
                                <small>Current Bid</small>
                                <img src={Eth} />
                                <p>3.421</p>
                            </div>
                            <div>
                                <small>End in</small>
                                <p>1h 12m 14s</p>
                            </div>
                        </div>
                        <button className="red-btn">
                            <span>💳</span>
                            Place Bid
                        </button>
                    </div>
                </div>
            </div>
        </section>
>>>>>>> 91f7fe3f0cc79213838bcd8a671256d238c607c5
    );
}

export default Collections;