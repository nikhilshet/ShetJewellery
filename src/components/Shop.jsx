import React, { useEffect, useState } from 'react'
import { Navigate, useParams , useNavigate} from 'react-router-dom'
import data from './Data'
import { useNav } from '../Context/NavbarContext'
import { useFilter } from '../Context/FilterContext'

function Product() {
  const {gender , subCategory} = useParams()
  console.log(gender , subCategory);
  
  const navigate = useNavigate()
  const {navData} = useNav()

  const [selectedFilter , setSelecetdFilter] = useState(null)
  const [openFilter , setOpenFilter] = useState(false)
  const {filter , setFilter} = useFilter()

  const [tempFilter , setTempFilter] = useState({
    gender:"",
    category:[],
    material:[],
    color:[],
    rating:0,
    priceRange : 0,
})

if(subCategory){
  useEffect(()=>{
    setFilter((prev)=>{
      return{
        ...prev,
        category:[subCategory]
      }
    })
},[subCategory])
}


  useEffect(()=>{
    setFilter((prev)=>{
      return{
        ...prev,
        gender: gender
      }
    })
},[gender])


  function applyFilter(){
    setFilter(tempFilter)
    setOpenFilter(false)
  }

  

  function handleChange(e){
      const {value , checked , name , type} = e.target;
    if(type !== "checkbox"){
      setTempFilter((prev)=>{
        return{
          ...prev,
          [name] : value
        }
      })
    }
    else{
      if(checked){
        setTempFilter((prev)=>{
          console.log("prev",prev);
          
          return{
            ...prev,
            [name]:[...prev[name] , value]

          }
        })
      }else{
        setTempFilter((prev)=>{
          return{
            ...prev,
            [name] : prev[name].filter((item)=>(item !== value))
          }
        })
      }
    }

}

  
  const filterdProducts = data.products.filter((prod)=>{
    if(
        gender.toLowerCase() === prod.gender.toLowerCase() 
        &&
        // ((!subCategory) || subCategory.toLowerCase() === prod.product.toLowerCase() )
        // &&
        ((!filter.rating) || prod.rating > filter.rating) 
        &&
        (!filter.material.length > 0 || (Array.isArray(filter.material) && filter.material.includes(prod.material)))
        &&
        (!filter.color.length > 0 || (Array.isArray(filter.color) && filter.color.includes(prod.color))) 
       &&
        (!filter.category.length || filter.category.includes(prod.product))
    ){
      return prod
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
    category:{
      title:"Category",
      options: Array.from(new Set(data.products.filter((prod)=>prod.gender === gender).map((prod)=>prod.product)))
    },
    rating:{
      title:"Rating",
      options: [4.5 , 4.0 ,  3.0 ,  2.0 ,  1.0]
    }

  }

  function handleProductClick(prod){
    navigate(`/product/${prod.product}/${prod.id}` , {state:{prod}})
  } 
  
  
  
  
  
  
  const products = filterdProducts.map((prod , index) => {
    return(
      <div onClick={()=>handleProductClick(prod)} key={index} className=' w-86 h-86 p-4 flex flex-col '>
        <div className=''>
         <img className='w-full h-60' src='../home/diamonds.jpg'></img>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-lg font-light text-slate-700'>{prod.name}</p>
          <p className='text-md font-light text-slate-700'>$ {prod.price}</p>       
          <p className='text-sm font-light text-slate-700'>★ {prod.rating}</p>

  
          
        </div>
      </div>
    )
  }
  )
  console.log(openFilter);
  
  const filterOptions = Object.keys(filterObject).map((key)=>{
  
    return(
     
      <p key={key} onClick={()=>filterClick(key)} className={`ml-5 relative font-light text-lg cursor-pointer group`}>{filterObject[key].title}
      {openFilter ?
        <div className={`w-0 h-0.5 absolute ${navData.isVisible ? "bg-white" : "bg-black" } ${key.toLowerCase() === selectedFilter ? "w-8" :""} group-hover:w-8 group-hover:bg-yellow-300  transition-all`}></div>
        :
        ""
      }
      </p>
      
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
    if(selectedFilter === 'rating'){
      return(
      <div className='flex items-center space-x-2'>    
      <input key={list} onChange={handleChange} name={selectedFilter}  type="radio" value={list} id={list}/>
      <label htmlFor={list}>{list}</label>
      </div>
      
      )


    }else{
      return(
      <div className='grid grid-cols-2 '>    
        <input key={list} onChange={handleChange} name={selectedFilter} checked={tempFilter[selectedFilter]?.includes(list)} type="checkbox" value={list} id={list}/>
        <label htmlFor={list}>{list}</label>
       
      </div>
    )}
    
  })

console.log("temp" , tempFilter);
console.log("filter" , filter);
console.log("filtered" , filterdProducts);
console.log("category" , filter.category);
console.log("material" , filter.material);
console.log("color" , filter.color);



  return (
<div className="">
  <div className={`sticky top-16 flex flex-col justify-center items-center ${navData.isVisible ? "bg-black text-white" : "bg-white text-black"}`}>
    <div className='flex h-16 justify-center items-center'>
      {filterOptions}
    </div>
  </div>
  {openFilter && 
  <div className={`absolute w-full h-60 bg-white flex flex-col items-center z-10 `}>
    <p className='text-xl font-semibold first-letter:uppercase'>{selectedFilter}</p>
      {subFilterOptions}
      <button onClick={applyFilter} className='bg-blue-500'>Apply Filters</button>
    </div>
    
    }
  
  
  <div className="flex justify-evenly items-center p-12 z-5">
    <div className="grid grid-cols-5">
      {products}
    </div>
  </div>
</div>


  )
}

export default Product