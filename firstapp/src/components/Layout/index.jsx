/* eslint-disable no-unused-vars */
import Navbar from '../Navbar'
import Footer from '../Footer'
import LandingPage from '../LandingPage'
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <Navbar />
            
            <Outlet />
            
            <Footer />
        </>
    );
}

export default Layout;