import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import data from './Data'
import { useCart } from '../Context/CartContext'
import Star from './subComponents/Star'


function ProductPage() {

    const {id , product} = useParams()

    console.log(id);
    console.log(product);
    
    const location = useLocation()
    const selectedItem = location.state?.prod

    console.log("ha",selectedItem);
    if (!selectedItem) {
      return <div>Product not found.</div>;
    }

    const {cartItems , setCartItems} = useCart()
    console.log(cartItems);
    

    function addToCart(item){
      setCartItems((prev)=>{
        if(prev.find((cart)=>item.id === cart.id)){
          return prev.map((cart)=>
            cart.id === item.id ?
              {
                ...cart,
                quantity: cart.quantity + 1,
              }
              :
              cart
          )
          
        }else{
          return[
            ...prev,
            {
              id:item.id,
              name: item.name,
              product: item.product,
              price: item.price,
              quantity : 1,
            }
          ]
        }

      })
    }
  return (
    <div>
      
        <div className='grid grid-cols-2 w-full p-4'>
            <div className='h-screen'>
                <div className='w-full h-full flex justify-center'>
                  <img className='w-96 h-full' src="https://picsum.photos/200/300" alt="" />
                </div>
            </div>
            <div className='flex flex-col p-12'>
                <p className='text-3xl font-bold mb-4'>{selectedItem.name}</p>
                <p className='text-xl font-semibold mb-4 text-slate-500'>{selectedItem.product}</p>
                <p className='text-3xl mb-4'>$ {selectedItem.price}</p>
                <Star rating={selectedItem.rating}/>
                <hr className='bg-black my-4' />
                <p ><span className='font-semibold '>Description:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                <button onClick={()=>{addToCart(selectedItem)}} className='bg-black text-white w-32 h-12 mt-4'>
                  Add To Cart
                </button>
            </div>
        </div>
        
       
    </div>
  )
}

export default ProductPage
