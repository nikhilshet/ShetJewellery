
import { useState } from 'react'
import Home from './components/Home'
import Gift from './components/Gift'
import About from './components/About'
import Shop from './components/Shop'
import { navContext } from './Context/NavbarContext'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
function App() {

const [data , setData] = useState(false)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='gift' element={<Gift/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='shop' element={<Shop/>}/>
    </Route>
  )
)


  return (
    <navContext.Provider value={{data , setData}}>
     <RouterProvider router={router}/>
    </navContext.Provider>
  )
}

export default App
