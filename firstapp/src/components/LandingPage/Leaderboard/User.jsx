/* eslint-disable react/prop-types */
<<<<<<< HEAD
=======
import Eth from "../../../assets/icons/Etherium.png"

>>>>>>> 014bd9ab03532b627cde7bcb7d759b1cc766ae53
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