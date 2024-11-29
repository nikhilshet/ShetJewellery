import React from 'react'
import { useCart } from '../Context/CartContext'

function Cart() {
  const{cartItems} = useCart()
  console.log(cartItems);
  
  const cartCard = cartItems.map((item)=>{
    return(
      <div className='w-full h-32 mb-4 flex'>
        <img src='https://picsum.photos/200/300'></img>

        <div className='ml-12 flex flex-col justify-center'>
          <p className='text-xl'> {item.name}</p>
          <p className='text-sm'> {item.product} </p>
          <p className='text-lg mb-4'>$ {item.price}</p>
          
          <p className=' text-sm opacity-70'>Available</p>
          <p className='text-sm opacity-70'>Shipping usually in 3-4 business Days</p>
        </div>
      </div>

    )
  })


  const totalPrice = cartItems.reduce((sum , element)=>{
    return sum + element.quantity * element.price
  }, 0)
  

  return (
    <div className='p-12 grid grid-cols-10'>
      <div className='col-span-7'>
        {cartCard}
      </div>
    <div>
    
    {totalPrice ? 
      <p>Total Price {totalPrice}</p> 
      :""}
    </div>

      
    </div>
  )
}

export default Cart
