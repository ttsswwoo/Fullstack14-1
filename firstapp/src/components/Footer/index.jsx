/* eslint-disable no-unused-vars */
import Navbar from '../Navbar'
import LandingPage from '../LandingPage';
import Logo from '../common/Logo'

import './style.scss'

function Footer(graps) {
    return (
        <>
            <footer>
                <div className="left">
                    <Logo />
                    <h1>NFT Distro</h1>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sit officia sed, quia debitis quam.</small>
                    <p>
                        <span>@</span>
                        <small>Copyright qwer</small>
                    </p>
                </div>
                <div className="right">

                </div>
            </footer>
        </>
    );
}

export default Footer;