import React, { useEffect, useRef, useState } from 'react'
import { useNav } from '../Context/NavbarContext'
import { NavLink, useNavigate } from 'react-router-dom'
import DropDown from './subComponents/DropDown'
import { useFilter } from '../Context/FilterContext'
import blackLogo from '../assets/SHET.png'
import whiteLogo from '../assets/SHETW.png'

function Navbar() {
  const navigate = useNavigate()
  const {navData , setNavData} = useNav()
  const {filter, setFilter} = useFilter()
  // console.log(navData)
  const nav = useRef()



  
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        setNavData((prev)=>{
          return{
            ...prev,
            isVisible : false
          }
        })
      }else{
        setNavData((prev)=>{
          return{
            ...prev,
            isVisible : true
          }
        })
      }
    })
    observer.observe(nav.current)
  },[])
  
  function homeClick(){
    setFilter({
      gender:"",
      category:[],
      material:[],
      color:[],
      rating:0,
      priceRange : 0,
  })

    navigate("")

 

    
  }
  console.log(filter);
  return (
    <>
    <div  ref={nav}  className='w-full h-16 bg-white flex items-center justify-between px-16'>
      <div className='flex'>
        <p className='mr-5 text-xl'>Menu </p>
        <p className=' text-xl'>Search</p>
      </div>
      <img onClick={homeClick} className='w-32' src={blackLogo}></img>
      <div>
      <p className=' text-xl'>Welcome User</p>
      </div>
    </div>
    <div className={`w-full h-16  flex items-center px-16 sticky top-0 justify-between z-30  ${navData.isVisible ? "bg-white text-black" : "bg-black text-white"} `}>
      <div>{navData.isVisible ? <img className='w-32' src={blackLogo}></img> : "" }</div>
      <div>
        <ul className={`px-16 flex items-center text-md mr-auto`}>



          <li className='mx-5 relative font-light cursor-pointer group'>
            <DropDown/>
            <div className={`w-0 h-0.5 absolute ${navData.isVisible ? "bg-black" : "bg-white" } group-hover:w-8 transition-all`}></div>
          </li>
          
          <li className='mx-5 relative font-light cursor-pointer group '>
          <NavLink to="about">ABOUT</NavLink>
          <div className={`w-0 h-0.5 absolute ${navData.isVisible ? "bg-black" : "bg-white" } group-hover:w-8 transition-all`}></div>
          </li>
            
          
          <li className='mx-5 relative font-light cursor-pointer group'>
          <NavLink to="/contact">CONTACT</NavLink>
          <div className={`w-0 h-0.5 absolute ${navData.isVisible ? "bg-black" : "bg-white" } group-hover:w-8 transition-all`}></div>
          </li>
    
          <li className='mx-5 relative font-light cursor-pointer group'>
          <NavLink to="/gift">GIFT</NavLink>
          <div className={`w-0 h-0.5 absolute ${navData.isVisible ? "bg-black" : "bg-white" } group-hover:w-8 transition-all`}></div>
          </li>

        </ul>
       </div>
       <div>
          <p className='text-xl cursor-pointer'> <NavLink to="/cart">My Cart</NavLink></p>
       </div>
    </div>
   
    </>
  )
}

export default Navbar
