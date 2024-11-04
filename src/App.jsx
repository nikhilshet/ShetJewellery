
import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { navContext } from './Context/NavbarContext'
function App() {

  const [data , setData] = useState(false)

  return (
    <navContext.Provider value={{data , setData}}>
      <Navbar/>
      <Home/>
      <Footer/>
    </navContext.Provider>
  )
}

export default App
