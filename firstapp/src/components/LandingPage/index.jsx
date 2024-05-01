/* eslint-disable no-unused-vars */
import Ownership from "./Ownership"
import TrendingArt from "./TrendingArt";
import Collections from "./Collections";
import Leaderboard from "./Leaderboard"
import Explore from "./Explore";
import "./style.scss"

function LandingPage() {
    return (
        <>
            <Ownership />
            <TrendingArt/>
            <Collections/>
            <Leaderboard />
            <div className="logo">
                <h1>Trending Art 🔥</h1>
                <p>Discover more</p>
            </div>
            <div className="cards">
                <div className="card-1">
                    <div className="img">
                        <img src="http://localhost:5173/src/assets/imgs/Salin1.png" alt="" />
                    </div>
                    <p>ExBoot #1</p>
                    <div className="end">
                        <div className="left2">
                            <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                            <p>Perperzon</p>
                        </div>
                        <div className="right2">
                            <small>Current Bid</small>
                            <p>฿3.421</p>
                        </div>
                    </div>
                </div>

                <div className="card-2">
                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-rYnAiaZmM3xa25mJeuDe6SzEbIpWtPyoIuVx_cNGZJlnX42" alt="" />
                    </div>
                    <p>ExBoot #2</p>
                    <div className="end">
                        <div className="left2">
                            <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                            <p>Perperzon</p>
                        </div>
                        <div className="right2">
                            <small>Current Bid</small>
                            <p>฿3.421</p>
                        </div>
                    </div>
                </div>

                <div className="card-3">
                    <div className="img">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6M6lcmB05EE32wYHbHn9GXuOhS5IlW7yV2GeKyxS7sjhTH7xr" alt="" />
                    </div>
                    <p>Future of Polygon X</p>
                    <div className="end">
                        <div className="left2">
                            <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                            <p>Perperzon</p>
                        </div>
                        <div className="right2">
                            <small>Current Bid</small>
                            <p>฿3.421</p>
                        </div>
                    </div>
                </div>

                <div className="card-4">
                    <div className="img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1c9K2wNX9PkJo38YFQli_2C_YbIxY4Y9RY6zTMqrO7ld-lGYa" alt="" />
                    </div>
                    <p>Blue Wave #2</p>
                    <div className="end">
                        <div className="left2">
                            <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                            <p>Perperzon</p>
                        </div>
                        <div className="right2">
                            <small>Current Bid</small>
                            <p>฿3.421</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;