import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from "./Layout"
import LandingPage from "./LandingPage"

// eslint-disable-next-line no-unused-vars
function AllComponents(props) {
    const location = useLocation();

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LandingPage/>} />
                    <Route path="/about" element={"About page"} />
                    <Route path="/404" element={"404 Page Not Found"} />
                    {/* https://www.youtube.com/...
                    https://www.wikipedia.org/about */}
                </Route>
            </Routes>
        </>
    );
}

export default AllComponents;