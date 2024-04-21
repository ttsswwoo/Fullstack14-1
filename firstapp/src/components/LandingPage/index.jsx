/* eslint-disable no-unused-vars */
import Ownership from "./Ownership"
import Leaderboard from "./Leaderboard"
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
                    <p>ExBoot #1</p>
                </div>
                <div className="card-2">
                    <p>ExBoot #2</p>
                </div>
                <div className="card-3">
                    <p>Future of Polygon X</p>
                </div>
                <div className="card-4">
                    <p>Blue Wave #2</p>
                </div>
            </div>
        </>
    );
}

export default LandingPage;