import React from 'react'
import { useParams } from 'react-router-dom'
import data from './Data'

function Product() {
  const {gender , subCategory} = useParams()
  console.log(gender , subCategory);
  
  
  const filterdProducts = data.products.filter((prod)=>{
    if
    (!gender || prod.gender.toLowerCase() === gender.toLowerCase() && 
    (!subCategory || prod.product.toLowerCase() === subCategory.toLowerCase())
  
  
  ){
      return(prod)
    }
  })

  console.log(filterdProducts);
  

  
  
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
 
  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold'>{gender}</h1>
        <div className='flex justify-evenly items-center '>
            <div className='grid grid-cols-5 gap-10 m-5 '>
                  {products} 
            </div>
        </div>
    </div>
  )
}

export default Product
