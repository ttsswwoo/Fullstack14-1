/* eslint-disable react/jsx-no-undef */
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from "./Layout"
import LandingPage from "./LandingPage"
import About from "./About"
import Explore from "./Explore"
import CreateNFT from './CreateNFT'
import Page404 from './Page404'

// eslint-disable-next-line no-unused-vars
function AllComponents(props) {
    const location = useLocation();

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LandingPage/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/create-nft" element={<CreateNFT/>} />
                    <Route path="/explore" element={<Explore/>} />
                    <Route path="*" element={<Page404 />} />
                    {/* https://www.youtube.com/...
                    https://www.wikipedia.org/about */}
                </Route>
            </Routes>
        </>
    );
}

export default AllComponents;