import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './Data'
import { useNav } from '../Context/NavbarContext'
import { useFilter } from '../Context/FilterContext'

function Product() {
  const {gender , subCategory} = useParams()

  const {navData} = useNav()

  const [selectedFilter , setSelecetdFilter] = useState(null)
  const [openFilter , setOpenFilter] = useState(false)

  const {filter , setFilter} = useFilter()

  console.log(filter);
  
  function handleChange(e){

  }
  
  
  const filterdProducts = data.products.filter((prod)=>{
    if
    (!gender || prod.gender.toLowerCase() === gender.toLowerCase() && 
    (!subCategory || prod.product.toLowerCase() === subCategory.toLowerCase())
  ){
      return(prod)
    }
  })


  

  const filterObject = {
    material:{
      title:"Material",
      options: Array.from(new Set(filterdProducts.map((prod)=>prod.material)))
    },
    color:{
      title:"Color",
      options: Array.from(new Set(filterdProducts.map((prod)=>prod.color)))
    },
    rating:{
      title:"Rating",
      options: [ 4.0 ,  3.0 ,  2.0 ,  1.0]
    }

  }

  
  
  
  const products = filterdProducts.map((prod , index) => {
    return(
      <div key={index} className='w-72 h-80 bg-slate-400 flex flex-col '>
        <img className='w-full h-60' src='../home/diamonds.jpg'></img>
        <p className='text-xl'>{prod.name}</p>
        <p className='text-xl'>{prod.price}</p>
        <p className='text-xl'>{prod.rating}</p>
      </div>
    )
  }
  )
  
  const filterOptions = Object.keys(filterObject).map((key)=>{
    return(
      <p key={key} onClick={()=>filterClick(key)} className='ml-5 font-semibold text-lg cursor-pointer'>{filterObject[key].title}</p>
    )
  })
  
  function filterClick(category){
    if(category === selectedFilter){
      setOpenFilter((prev)=>!prev)
    }
    else{
      setOpenFilter(true)
      setSelecetdFilter(category)
    }
  }

  const subFilterOptions = selectedFilter && filterObject[selectedFilter].options.map((list)=>{
    return(
      <div className='flex space-x-2'>
        <input key={list} onChange={handleChange}  type="checkbox" value={list} id={list}/>
        <label htmlFor={list}>{list}</label>
      </div>
    )
  })



  return (
<div className="">
  <div className={`sticky top-16 px-4 py-4 flex justify-between items-center ${navData.isVisible ? "bg-black text-white" : "bg-white text-black"}`}>
    <h1 className="text-lg font-semibold">{gender}/{subCategory}</h1>
    <div className='flex'>
      {filterOptions}
    </div>
  </div>
  {openFilter && <div className='absolute w-full h-60 bg-white flex flex-col justify-center items-center'>
      {subFilterOptions}
    </div>}
  
  <div className="flex justify-evenly items-center p-12">
    <div className="grid grid-cols-4 gap-10">
      {products}
    </div>
  </div>
</div>


  )
}

export default Product
