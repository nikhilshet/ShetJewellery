import React from 'react'
import homeImage from '../assets/home1.png'
import { useNav } from '../Context/NavbarContext'
function Home() {
  const {navData} = useNav()

  const transition = "translate-y-6 transition-transform duration-700 group-hover:-translate-y-6";
  return (
    <>
    <div className='w-full'>
        <div className='w-full h-screen bg-cover flex justify-center items-end pb-40'
            style={{ backgroundImage: `url(${homeImage})` }}> 
            { navData.isVisible &&
              <p className='text-white text-center text-2xl font-light animate-popup '>With over 40 years of experience in the jewelry industry, we specialize in creating luxurious,<br/> handcrafted pieces that embody timeless elegance and exceptional craftsmanship,<br/> offering you a legacy of opulence and sophistication.</p>   
             
             } 
        </div>
    </div>
    <div className='min-h-min w-full flex justify-center items-center p-10'>    
      <div className='grid grid-cols-5 grid-rows-5 gap-16'>
        {/* <div className='row-span-2 bg-cover' style={{backgroundImage:"url(../home/diamonds.jpg)"}}></div>
        <div className='w-56 h-56 bg-cover' style={{backgroundImage:"url(../home/gold.jpg)"}}></div>
        <div className='w-56 h-56 bg-cover' style={{backgroundImage:"url(../home/silver.jpg)"}}></div>
        <div className='w-56 h-56 bg-cover' style={{backgroundImage:"url(../home/gems.jpg)"}}></div> */}
        
        <div  className= ' w-96 h-96 row-span-3 col-span-2 bg-cover bg-center flex flex-col justify-end items-center group overflow-hidden relative' style={{backgroundImage:"url(../home/gems.jpg)"}}>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
          <p className='z-20 text-white text-3xl font-bold italic'>Gems</p>
          <p className={`z-20 text-white mt-6 text-lg ${transition} cursor-pointer underline underline-offset-8`}> Shop </p>

         
        </div>



        <div className= ' row-span-2 col-span-3 bg-cover bg-center flex flex-col justify-end items-center group relative'style={{backgroundImage:"url(../home/golds.jpg)"}}>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
        <p className='z-20 text-white text-3xl font-bold italic'>Gold</p>
          <p className={`z-20 text-white mt-6 text-lg ${transition} cursor-pointer underline underline-offset-8`}> Shop </p>
          
        </div>

        <div className=' flex justify-center items-center bg-white  text-black'> <p className='text-3xl font-extralight '>Discover <br/>categories</p></div>
       
        <div className= ' row-span-2 col-span-3 bg-cover bg-center flex flex-col justify-end items-center group relative ' style={{backgroundImage:"url(../home/diamond.jpg)"}}>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
          <p className='z-20 text-white text-3xl font-bold italic'>Diamond</p>
          <p className={`z-20 text-white mt-6 text-lg ${transition} cursor-pointer underline underline-offset-8`}> Shop </p>
           
        </div>
        
        <div className= ' col-start-4 col-end-6 row-start-3 row-end-6  bg-cover bg-center flex flex-col justify-end items-center group relative' style={{backgroundImage:"url(../home/silver.jpg)"}}>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-10"></div>
          <p className='z-20 text-white text-3xl font-bold italic'>Silver</p>
          <p className={`z-20 text-white mt-6 text-lg ${transition} cursor-pointer underline underline-offset-8`}> Shop </p>
          
        </div>
    </div>
    </div>
  
    <div className='flex justify-center items-center m-12'>
      <div className='grid grid-cols-2'>
            <img src='../home/men.png'></img>
            <div className='flex flex-col justify-center items-center pl-5'>
              <p className='text-left text-light text-xl'>Explore our curated collection of men’s jewelry, crafted to reflect strength <br/> and sophistication. From sleek bracelets to timeless rings,<br/> each piece is designed to elevate your style with premium materials<br/> and bold designs for the modern man.</p>
              <button className='w-20 h-10 bg-white border-2 transition-all text-xl duration-500 border-black mt-10 hover:bg-black hover:text-white'>Men</button>
              </div>
      </div>
    </div>
    <div className='flex justify-center items-center m-12'>
      <div className='grid grid-cols-2'>
            
            <div className='flex flex-col justify-center items-center p-10'>
              <p className='text-right text-light text-xl'>Explore our curated collection of men’s jewelry, crafted to reflect strength <br/> and sophistication. From sleek bracelets to timeless rings,<br/> each piece is designed to elevate your style with premium materials<br/> and bold designs for the modern man.</p>
              <button className='w-20 h-10 bg-white border-2 text-xl transition-all duration-500 border-black mt-10 hover:bg-black hover:text-white'>Women</button>
            </div>
            <img src='../home/women.png'></img>
      </div>
    </div>

    </>
  )
}

export default Home
