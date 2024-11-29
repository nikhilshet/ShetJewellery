import React from 'react'
import whiteLogo from '../assets/SHETW.png'

function Footer() {
  return (
    <footer className='bottom-0 bg-black w-full h-96 px-20 text-white grid grid-cols-2 grid-rows-2 place-content-center' >
        <img className="w-32 h-32 m-0" src={whiteLogo}></img> 
        <p className='font-extralight float-right mt-10'>Socials : Instagram Twitter Facebook</p>
       
        <ul className='font-extralight'>
            <li className='font-regular'>Quick Links</li>
            <li>Shop</li>
            <li>About</li>
            <li>contact</li>
            <li>Location</li>
        </ul>
        <div><input className='w-60 h-10 indent-2' placeholder='Your Email'></input>
        <button className='w-16 h-10 bg-white text-black ml-5'>Submit</button>
        </div>
    </footer>
  )
}

export default Footer
