import { BrowserRouter } from 'react-router-dom'
import AllComponents from "./components/AllComponents"

function App() {
  return (
    <BrowserRouter>
      <AllComponents />
    </BrowserRouter>
  )
}

export default App

{/* 
    git checkout -b 'adding-side-bar' 
    git add .
    git commit -m "Added Navbar and LandingPage components"
    git push
*/}