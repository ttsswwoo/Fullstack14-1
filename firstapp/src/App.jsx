import { BrowserRouter } from 'react-router-dom'
import AllComponents from "./components/AllComponents"
<<<<<<< HEAD
=======
import { useReducer } from 'react'
import { initialState, globalReducer, context } from './state'
>>>>>>> 6b83953db15d1c1f0b3359e91a8f6c56821a0dde

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  state.dispatch = dispatch

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <AllComponents />
    </BrowserRouter>
=======
    <context.Provider value={state}>
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </context.Provider>
>>>>>>> 6b83953db15d1c1f0b3359e91a8f6c56821a0dde
  )
}

export default App

<<<<<<< HEAD
{/* 
    git checkout -b 'adding-side-bar' 
    git add .
    git commit -m "Added Navbar and LandingPage components"
    git push
*/}
=======
>>>>>>> 6b83953db15d1c1f0b3359e91a8f6c56821a0dde
