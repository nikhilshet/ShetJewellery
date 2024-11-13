import React, { useEffect, useState } from 'react'
import { useNav } from '../../Context/NavbarContext'
import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../Context/FilterContext'

const menuItem = [
    {
        title:"Men",
        submenu : ['Ring' , 'Bracelet' , 'Brooch' , 'Cufflink' , 'Chain' , 'Pendant' , 'Ear Ring']
        
    },
    {
        title:"Women",
        submenu:['Ring' , 'Necklace', 'Ear Ring' , 'Bracelet' , 'Bangles' , 'Pendant' , 'Chain' , 'Anklet' , 'Brooch' ]
    }
]


function DropDown() {
    const navigate = useNavigate()

    const {filter , setFilter} = useFilter()
    
    const [menuIndex , setMenuIndex] = useState(null)
    const [open , setOpen] = useState({menu:false , subMenu:false})

    console.log(filter)
    


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
                    dropdown:""
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

    function handleSubCategory(prod){
        setFilter((prev)=>{
            return{
                ...prev,
                category: [prod],
                dropdown: prod
                

            }
        })
        
        
            navigate(`/${filter.gender}/${prod}`)
        

        


    }
 
    
//   function handleChange(e){
//     if(navData.gender){
//     navigate(`/shop/${e.target.value}`)
//     }else{
//       navigate('/shop/womens')
//     }

//     setNavData((prev)=>{
//       return{
//         ...prev,
//         [e.target.name] : e.target.value
//       }
//     })
//   }

  const gender = menuItem.map((menu , index)=>(
    <li className={`m-1 text-lg rounded-md transition-all duration-200  hover:bg-slate-100 hover:font-semibold ${index === menuIndex ? 'bg-slate-100 font-semibold' : ''}`} onClick={()=>handleGenderMenu(menu, index)} key={index}>{menu.title}  <span className='float-right font-bold'> {index === menuIndex ? "": '>' }</span>
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
                <ul className={`w-40 p-1 relative text-center ${ open.subMenu ? 'rounded-l-lg' : 'rounded-lg'}  bg-white text-black`}>
                    {gender}
                </ul>
            }
        </div>
        <div>
            {
                open.menu && open.subMenu && menuIndex !== null &&
                <ul  className='w-40 p-1 text-center absolute rounded-r-lg rounded-b-lg bg-white text-black'>
                    {productList}
                </ul>
            }
        </div>
        </div>
       
      

        
    </div>

)
}

export default DropDown
