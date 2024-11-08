import React, { useEffect, useRef, useState } from 'react'
import { useNav } from '../Context/NavbarContext'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const {data , setData} = useNav()

  const nav = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        setData(false)
      }else{
        setData(true)
      }
    })
    observer.observe(nav.current)
  },[])
  
  return (
    <>
    <div  ref={nav}  className='w-full h-16 bg-white flex items-center justify-between px-16'>
      <div className='flex'>
        <p className='mr-5 text-xl'>Menu </p>
        <p className=' text-xl'>Search</p>
      </div>
      <img className='w-32' src='../home/SHET.png'></img>
      <div>
      <p className=' text-xl'>Welcome User</p>
      </div>
    </div>
    <div className={`w-full h-16  flex items-center px-16 sticky top-0 justify-between z-30  ${data ? "bg-white text-black" : "bg-black text-white"} `}>
      <div>{data ? <img className='w-32' src='../home/SHET.png'></img> : "" }</div>
      <div>
        <ul className={`px-16 flex items-center text-md mr-auto`}>
          <li className='mx-5 font-light cursor-pointer'>
          <NavLink to="shop">SHOP</NavLink></li>
          <li className='mx-5 font-light cursor-pointer'>
          <NavLink to="about">ABOUT</NavLink></li>
          <li className='mx-5 font-light cursor-pointer'>
          <NavLink to="/contact">CONTACT</NavLink></li>
    
          <li className='mx-5 font-light cursor-pointer'>
          <NavLink to="/gift">GIFT</NavLink></li>
        </ul>
       </div>
       <div>
          <p className='text-xl'>My Cart</p>
       </div>
    </div>
    
    </>
  )
}

export default Navbar
