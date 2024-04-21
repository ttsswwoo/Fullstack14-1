/* eslint-disable react/prop-types */
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