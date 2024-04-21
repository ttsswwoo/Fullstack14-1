// /* eslint-disable no-unused-vars */
// import Salin1 from '../../../assets/imgs/Salin1.png'
// import Salin2 from '../../../assets/imgs/Salin2.png'
// import Salin3 from '../../../assets/imgs/Salin3.png'
// import Salin4 from '../../../assets/imgs/Salin4.png'

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
                    {/* <img src={Salin1} width={"150px"} alt="" /> */}
                    <p>ExBoot #1</p>
                </div>
                <div className="card-2">
                    {/* <img src={Salin2} width={"150px"} alt="" /> */}
                    <p>ExBoot #2</p>
                </div>
                <div className="card-3">
                    {/* <img src={Salin3} width={"150px"} alt="" /> */}
                    <p>Future of Polygon X</p>
                </div>
                <div className="card-4">
                    {/* <img src={Salin4} width={"150px"} alt="" /> */}
                    <p>Blue Wave #2</p>
                </div>
            </div>
        </>
    );
}

export default LandingPage;