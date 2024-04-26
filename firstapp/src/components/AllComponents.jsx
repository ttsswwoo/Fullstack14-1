import{Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from "./LandingPage"
import Layout from "./Layout"

function AllComponents(props) {
    const location = useLocation()
    
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='/about' element={'About page'} />
                    {/* https://www.youtube.com/.../ */}
                </Route>
            </Routes>
        </>
    );
}

export default AllComponents;