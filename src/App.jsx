
import { useState } from 'react'
import Home from './components/Home'
import Gift from './components/Gift'
import About from './components/About'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Contact from './components/Contact'
import { NavProvider } from './Context/NavbarContext'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { FilterContextProvider } from './Context/FilterContext'
import ProductPage from './components/ProductPage'
import { CartProvider } from './Context/CartContext'
function App() {



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/:gender/:subCategory' element={<Shop/>}/>
      <Route path='/:gender' element={<Shop/>}/>
      <Route path='/gift' element={<Gift/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:product/:id' element={<ProductPage/>}/>
    </Route>
  )
)


  return (
    <CartProvider>
      <FilterContextProvider>
        <NavProvider>    
          <RouterProvider router={router}/>
        </NavProvider>
      </FilterContextProvider>
    </CartProvider>

   
  )
}

export default App
