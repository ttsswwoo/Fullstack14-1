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
    );
}

export default Collections;