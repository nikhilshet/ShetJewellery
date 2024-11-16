import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../Context/FilterContext'
import data from '../Data'




function DropDown() {
    const menuItem = [
        {
            title:"Men",
            submenu : Array.from(new Set(data.products.filter((prod)=>prod.gender.toLowerCase() === "men").map((prod)=>prod.product)))
            
        },
        {
            title:"Women",
            submenu: Array.from(new Set(data.products.filter((prod)=>prod.gender.toLowerCase() === "women").map((prod)=>prod.product)))
        }
    
    ]
    const navigate = useNavigate()

    const {filter , setFilter} = useFilter()
    
    const [menuIndex , setMenuIndex] = useState(null)
    const [open , setOpen] = useState({menu:false , subMenu:false})


    
  

    
    function handleShopClick(){
        setOpen((prev)=>{
            return{
                ...prev,
                menu: !prev.menu,
                subMenu: false
            }
        })
        if(!open.menu){
            setMenuIndex(null)

            setFilter((prev)=>{
                return{
                    ...prev,
                    gender:"",
                    category:[]
                }
            })
        }
    }

    function handleGenderMenu(menu , index){
        
            setMenuIndex(index)

            setOpen((prev)=>{
                return{
                    ...prev,
                    subMenu: true
                    
                }
    
            })
          
        

            setFilter((prev)=>{
                return{
                    ...prev,
                    gender : menu.title
                }
            })
 
    }

    function genderClick(menu){
        
        setFilter((prev)=>{
            return{
                ...prev,
                gender : menu.title,
                category : []
            }
        })
        setOpen((prev)=>{
            return{
                ...prev,
                menu: false
            }
        })

        navigate(`/${menu.title}`)
    }

    function handleSubCategory(prod){
        setFilter((prev)=>{
            return{
                ...prev,
                category: [prod]
            }
        })
        setOpen((prev)=>{
            return{
                ...prev,
                menu: false
            }
        })

            navigate(`/${filter.gender}/${prod}`)
    }
 
    

  const gender = menuItem.map((menu , index)=>(
    <li className={`m-1 text-lg rounded-md transition-all duration-200  hover:bg-slate-100 hover:font-semibold ${index === menuIndex ? 'bg-slate-100 font-semibold' : ''}`} onClick={()=>genderClick(menu)} onMouseOver={()=>handleGenderMenu(menu, index)} key={index}>{menu.title}  <span className='float-right font-bold'> {index === menuIndex ? "": '>' }</span>
    </li>
  ))

  const productList =  menuIndex!== null && menuItem[menuIndex].submenu.map((prod , index)=>(
                    <li className='m-1 text-lg rounded-md transition-all duration-200  hover:bg-slate-100 hover:font-semibold' key={index} onClick={()=>handleSubCategory(prod)}>{prod}  </li>
                    ))
  
  return (
    <div>
        <p className='relative' name="menu" onClick={handleShopClick}>SHOP</p>

        
        <div className=' absolute flex flex-row'>
        <div>
            {  open.menu &&  
                <ul className={`w-40 p-1 relative text-center bg-white text-black`}>
                    {gender}
                </ul>
            }
        </div>
        <div>
            {
                open.menu && open.subMenu && menuIndex !== null &&
                <ul  className='w-40 p-1 text-center absolute  bg-white text-black'>
                    {productList}
                </ul>
            }
        </div>
 
        </div>
       
      

        
    </div>

)
}

export default DropDown
