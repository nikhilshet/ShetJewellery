
import { useState } from 'react'
import Home from './components/Home'
import Gift from './components/Gift'
import About from './components/About'
import Shop from './components/Shop'
import { NavProvider } from './Context/NavbarContext'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { FilterContextProvider } from './Context/FilterContext'
function App() {



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/:gender/:subCategory' element={<Shop/>}/>
      <Route path='gift' element={<Gift/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)


  return (
    <FilterContextProvider>
      <NavProvider>    
        <RouterProvider router={router}/>
      </NavProvider>
    </FilterContextProvider>

   
  )
}

export default App
