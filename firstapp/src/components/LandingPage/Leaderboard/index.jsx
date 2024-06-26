/* eslint-disable no-unused-vars */
import Person1 from "../../../assets/imgs/leaderboard/imo1.png"
import Person2 from "../../../assets/imgs/leaderboard/imo2.png"
import Person3 from "../../../assets/imgs/leaderboard/imo3.png"
import Person4 from "../../../assets/imgs/leaderboard/imo4.png"
import Person5 from "../../../assets/imgs/leaderboard/imo5.png"

import User from "./User.jsx"
import "./style.scss"

function Leaderboard() {
    return (
        <section className="leaderboard">
            <div className="size">

            <h2>Leaderboard of the Week</h2>

            <div className="users">
                <User name={"Perperzon"} balance={9.421} picture={Person1} />
                <User name={"Richard"} balance={9.421} picture={Person2} />
                <User name={"Anderson"} balance={9.421} picture={Person3} />
                <User name={"Michael"} balance={9.421} picture={Person4} />
                <User name={"Antonson"} balance={9.421} picture={Person5}>
                    <h1>Hello world</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cupiditate doloribus facilis architecto quasi itaque.</p>
                </User>
            </div>
            </div>
        </section>
    );
}

export default Leaderboard;