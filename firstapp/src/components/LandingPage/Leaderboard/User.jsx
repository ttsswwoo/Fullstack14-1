<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
=======
>>>>>>> 6b83953db15d1c1f0b3359e91a8f6c56821a0dde
import Eth from "../../../assets/icons/Etherium.png"

function User(props) {
    return (
        <div className="user-l">
            <span className="number">#1{props.number}</span>
            <img className="pic" src={props.picture} alt="Picture" />
            <div className="info">
                <h3>{props.name}</h3>
                <p className="crypto-balance">
                    <span className="crypto-icon">B</span>
                    {props.balance}
                </p>
            </div>
        </div>
    );
}

export default User;