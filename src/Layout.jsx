import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Outlet , useLocation} from 'react-router-dom'
function Layout() {

  const location = useLocation();

  const filterBar = location.pathname === '/shop'
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
